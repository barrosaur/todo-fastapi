'use server'
import { randomBytes } from "crypto"

export async function CreateTodoId() {
  return randomBytes(32).toString('hex')

  // rmr to insert a mysql code
}