import { Router } from "express";
import { ProductModel } from "./product.model";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const products = await ProductModel.find().sort({ displayOrder: 1, createdAt: -1 }).lean();
    return res.status(200).json({ ok: true, products });
  } catch (err) {
    return res.status(500).json({ ok: false, message: "Server error", err });
  }
});

export default router;
