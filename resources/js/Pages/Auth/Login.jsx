import Checkbox from "@/Components/ui/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";
import { Input } from "@/Components/ui/Input";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600 text-center">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-4">
                {/* Email Input */}
                <Input
                    label="Email Address"
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    autoComplete="username"
                    placeholder="Enter your email"
                    error={errors.email}
                    onChange={(e) => setData("email", e.target.value)}
                    required
                />

                {/* Password Input */}
                <Input
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    error={errors.password}
                    onChange={(e) => setData("password", e.target.value)}
                    required
                />

                <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="text-sm text-[#FF9F43] hover:underline font-medium"
                        >
                            Forgot password?
                        </Link>
                    )}
                </div>

                <div className="pt-2">
                    <PrimaryButton
                        className="w-full justify-center bg-[#FF9F43] hover:bg-[#e68a2e] h-11"
                        disabled={processing}
                    >
                        {processing ? "Signing in..." : "Log in"}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
