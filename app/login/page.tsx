"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Form, Input, Button, message as antdMessage } from "antd";
// import api from "../../utils/api";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      // const res = await api.post("/auth/login", values);
      // localStorage.setItem("token", res.data.token);

      antdMessage.success("Hisobga kirilmoqda...");
      setTimeout(() => router.push("/"), 1000);
    } catch (err: any) {
      antdMessage.error(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-[20px] p-6 sm:p-8 w-full max-w-md">
        <Form
          name="login"
          onFinish={onFinish}
          className="w-full"
          layout="vertical"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
            Login
          </h2>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Iltimos Emailni kiriting!" }]}
            className="font-semibold mb-2"
          >
            <Input placeholder="Email" className="h-10" type={"email"} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            className="font-semibold mb-2"
            rules={[{ required: true, message: "Iltimos Parolni kiriting!" }]}
          >
            <Input.Password placeholder="Password" className="h-10" />
          </Form.Item>

          <p className="text-blue-500 text-sm mb-4 hover:underline text-right">
            <Link href="/register">Yangi hisob yaratish</Link>
          </p>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-10"
              loading={loading}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
