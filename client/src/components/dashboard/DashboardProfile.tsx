import { Mail } from "lucide-react";

// =====================================
// Dashboard Profile
//
// Menampilkan profil user
// =====================================

function DashboardProfile() {
  return (
    <section className="rounded-[32px] bg-white p-6 shadow-xl">
      <div className="flex flex-col items-center text-center md:flex-row md:text-left">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300"
          alt="Profile"
          className="h-24 w-24 rounded-full object-cover"
        />

        <div className="mt-4 md:ml-6 md:mt-0">
          <h2 className="text-2xl font-bold">
            Alif Rahman
          </h2>

          <div className="mt-2 flex items-center justify-center gap-2 text-gray-500 md:justify-start">
            <Mail size={16} />

            <span>
              alif@example.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardProfile;