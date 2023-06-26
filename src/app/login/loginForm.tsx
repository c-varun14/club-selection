"use client";

import {
  loginFormInput,
  loginFormSchema,
} from "../../libs/validations/loginForm.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import React, { useRef, useState } from "react";
import Modal from "./modal";
import Providers from "@/libs/reactQuery";
import { Ref } from "./modal";

let formData: loginFormInput;
const inputClass =
  "block bg-light w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-darkest";

export default function LoginForm() {
  const schema: ZodType<loginFormInput> = loginFormSchema;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormInput>({
    resolver: zodResolver(schema),
  });

  const dialogRef = useRef<Ref>(null);

  const submitHandler = (data: loginFormInput) => {
    dialogRef.current?.open();
    formData = data;
  };

  return (
    <>
      <Providers>
        <Modal title="Confirm" formData={formData} ref={dialogRef} />
      </Providers>
      <form
        className="space-y-6 px-4 py-6"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="std"
              className="block text-sm font-medium leading-6"
            >
              Standard
            </label>
          </div>
          <div>
            <input
              id="std"
              type="number"
              {...register("std", { required: true, valueAsNumber: true })}
              className={inputClass}
            />
            {errors.std && (
              <p className=" font-semibold text-sm text-red-500 ">
                {errors.std.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <div className="flex items- invisible justify-between">
            <label htmlFor="" className="block text-sm font-medium leading-6">
              section
            </label>
          </div>
          <select
            {...register("sec", { required: true })}
            className={inputClass + " py-2"}
          >
            <option>-- Select your section --</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
          {errors.sec && (
            <p className=" font-semibold text-sm text-red-500 ">
              {errors.sec.message}
            </p>
          )}
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="rollNo"
              className="block text-sm font-medium leading-6"
            >
              Roll No
            </label>
          </div>
          <div>
            <input
              id="rollNo"
              type="number"
              {...register("rollNo", { required: true, valueAsNumber: true })}
              className={inputClass}
            />
            {errors.rollNo && (
              <p className=" font-semibold text-sm text-red-500 ">
                {errors.rollNo.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-brand px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Confirm
          </button>
        </div>
      </form>
    </>
  );
}
