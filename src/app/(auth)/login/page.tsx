'use client';

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Loader2, ChevronRight } from "lucide-react";

export default function LoginPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const res = await signIn("credentials", {
            password,
            redirect: false,
        });

        if (res?.error) {
            setError("Invalid Administrative Password");
            setLoading(false);
        } else {
            router.push("/admin");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-3xl p-10 shadow-xl border border-slate-100">
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-bis-blue/10 text-bis-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Lock size={32} />
                    </div>
                    <h1 className="text-2xl font-black uppercase tracking-tight">Admin Portal</h1>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">Authorized Access Only</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <input
                            type="password"
                            placeholder="Enter Admin Password"
                            className="w-full p-5 bg-slate-50 rounded-2xl outline-none ring-2 ring-transparent focus:ring-bis-blue transition-all font-bold text-center"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {error && <p className="text-bis-red text-[10px] font-black uppercase text-center">{error}</p>}
                    </div>

                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-[0.2em] flex justify-center items-center gap-2 hover:bg-bis-blue transition-colors disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : "Unlock System"}
                        {!loading && <ChevronRight size={18} />}
                    </button>
                </form>
            </div>
        </div>
    );
}