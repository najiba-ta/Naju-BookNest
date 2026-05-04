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
        <div className='container mx-auto px-4'>
            <div className='card shadow-2xl p-6 sm:p-8 md:p-12 
                            w-full sm:w-[80%] md:w-[60%] lg:w-[40%] 
                            mx-auto'>

                <form onSubmit={onSubmit} className="space-y-4">

                    <label className="block text-sm sm:text-base">Name</label>
                    <input 
                        name="name" 
                        placeholder="Update your Name" 
                        className="input w-full" 
                    />

                    <label className="block text-sm sm:text-base">Image Url</label>
                    <input 
                        name="image" 
                        placeholder="Update your Image URL" 
                        className="input w-full" 
                    />

                    <button
                        type="submit"
                        className="btn bg-cyan-700 text-white w-full mt-2"
                        disabled={loading}
                    >
                        {loading ? "Updating..." : "Update"}
                    </button>

                </form>

            </div>
        </div>
    );
}