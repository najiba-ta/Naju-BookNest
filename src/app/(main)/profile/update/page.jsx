'use client'

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function UpdateProfilePage() {

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;

        setLoading(true);

        const res = await authClient.updateUser({
            name,
            image,
        });

        if (res?.error) {
            alert("Update failed");
        } else {
            alert("Updated");
            router.push("/profile");
            router.refresh();
        }

        setLoading(false);
    };

    return (
        <div className='container mx-auto card shadow-2xl p-12'>
            <form onSubmit={onSubmit} className="space-y-4">
            Name
            <input name="name" placeholder="Update your Name" className="input w-full" />
            Image Url
            <input name="image" placeholder="Update your Image URL" className="input w-full" />

            <button
                type="submit"
                className="btn bg-cyan-700 text-white w-full"
                disabled={loading}
            >
                {loading ? "Updating..." : "Update"}
            </button>

        </form>
        </div>
    );
}