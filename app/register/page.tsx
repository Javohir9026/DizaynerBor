"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Input, Button, Select, message as antdMessage } from "antd";
// import api from "../../utils/api";

const { Option } = Select;

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: {
    fullName: string;
    username: string;
    role: string;
    email: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      // await api.post("/auth/register", values);

      antdMessage.success("Hisob yaratildi! Login pagega o'tilmoqda...");
      setTimeout(() => router.push("/login"), 1500);
    } catch (err: any) {
      antdMessage.error(err.response?.data?.message || "Error registering");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-[20px] p-6 sm:p-8 w-full max-w-md">
        <Form
          name="register"
          onFinish={onFinish}
          className="w-full"
          layout="vertical"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
            Register
          </h2>

          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Iltimos to'liq ismingizni kiriting!",
              },
            ]}
            className="font-semibold mb-1"
          >
            <Input placeholder="Full Name" className="h-10" />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Iltimos username kiriting!" }]}
            className="font-semibold mb-1"
          >
            <Input placeholder="Username" className="h-10" />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Iltimos rolni tanlang!" }]}
            className="font-semibold mb-1"
          >
            <Select placeholder="Select role" className="h-10">
              <Option value="designer">Dizayner</Option>
              <Option value="user">Foydalanuvchi</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Iltimos email kiriting!" }]}
            className="font-semibold mb-1"
          >
            <Input placeholder="Email" type="email" className="h-10" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Iltimos parol kiriting!" }]}
            className="font-semibold mb-1"
          >
            <Input.Password placeholder="Password" className="h-10" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-10"
              loading={loading}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
