import express, { Request, Response } from "express";
import { fetchClassifyData } from "../services/classify.service";

export const classifyName = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({
        status: "error",
        message: "Query parameter is not found",
      });
    }

    if (typeof name !== "string") {
      return res.status(422).json({
        status: "error",
        message: "Query parameter cannot be processed",
      });
    }

    const classify = await fetchClassifyData(name);
    const { gender, probability, count } = classify;

    if (!gender || count === 0) {
      return res.status(404).json({
        status: "error",
        message: "No prediction available for the provided name",
      });
    }

    const sample_size = count;

    const is_confident = probability >= 0.7 && sample_size >= 100;

    const processed_at = new Date().toISOString();

    return res.status(200).json({
      status: "success",
      data: {
        name,
        gender,
        probability,
        sample_size,
        is_confident,
        processed_at,
      },
    });
  } catch (error) {
    console.error("An error occured: ", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
