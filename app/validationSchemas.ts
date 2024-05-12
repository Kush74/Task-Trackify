import { z } from "zod";

export const createIsssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
});
