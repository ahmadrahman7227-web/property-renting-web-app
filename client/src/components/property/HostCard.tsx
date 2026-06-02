import { MessageCircle, ShieldCheck } from "lucide-react";

import Button from "../ui/Button";

// =====================================
// Host Card
//
// Menampilkan informasi host
// =====================================

function HostCard() {
  return (
    <section className="mt-12">
      {/* ==========================
      Section Title
      ========================== */}

      <h2 className="mb-6 text-2xl font-bold text-[#1b1c19]">
        Meet Your Host
      </h2>

      {/* ==========================
      Host Card
      ========================== */}

      <div className="rounded-[32px] bg-white p-6 shadow-xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          {/* Host Image */}

          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300"
            alt="Host"
            className="h-24 w-24 rounded-full object-cover"
          />

          {/* Host Info */}

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">
                Michael Anderson
              </h3>

              <ShieldCheck
                size={18}
                className="text-green-500"
              />
            </div>

            <p className="mt-2 text-gray-600">
              Premium Host with over 8 years of
              experience managing luxury stays.
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Response rate: 98% • Usually replies
              within 1 hour
            </p>
          </div>

          {/* Contact Button */}

          <Button
            variant="secondary"
            className="flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Contact Host
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HostCard;