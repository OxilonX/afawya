"use client";
import { ImageUpload } from "@/components/image-upload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Phone, X, MessageSquare, Bell, User } from "lucide-react";

const UploadImageUI = () => {
  const [image, setImage] = useState(null);
  const [callerName, setCallerName] = useState("العفوية");

  return (
    <div className="max-w-md mx-auto space-y-8 p-4 bg-background text-foreground">
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground ml-1 flex items-center gap-2">
          <User size={14} /> Name of the Caller
        </label>
        <Input
          value={callerName}
          onChange={(e) => setCallerName(e.target.value)}
          placeholder="e.g. burropongas"
          className="bg-secondary/15 border-border rounded-xl focus-visible:ring-primary"
        />
      </div>

      {!image ? (
        <ImageUpload onUpload={setImage} />
      ) : (
        <div className="flex flex-col items-center space-y-6">
          <div
            id="meme-canvas"
            className="relative w-[340px] h-[600px] bg-black rounded-[40px] overflow-hidden shadow-2xl border-[2px] border-secondary/40 flex flex-col items-center"
          >
            <p className="mt-6 text-muted-foreground text-lg font-light tracking-tight">
              mobile
            </p>

            <h2 className="mt-4 text-white text-4xl font-bold tracking-tight px-4 text-center">
              {callerName || "Unknown"}
            </h2>

            <div className="mt-8 w-48 h-48 overflow-hidden bg-transparent">
              <img
                src={image}
                alt="Caller"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-auto mb-10 w-full flex justify-between px-10">
              <div className="flex flex-col items-center gap-2 text-white">
                <Bell size={24} className="fill-current" />
                <span className="text-xs font-medium">Remind Me</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-white">
                <MessageSquare size={24} className="fill-current" />
                <span className="text-xs font-medium">Message</span>
              </div>
            </div>

            <div className="mb-12 w-full flex justify-between px-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-18 h-18 bg-destructive rounded-full flex items-center justify-center text-destructive-foreground shadow-lg">
                  <Phone size={36} className="rotate-[135deg] fill-current" />
                </div>
                <span className="text-base  tont-medium">رفض</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-18 h-18 bg-green-400 rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                  <Phone size={36} className="fill-current" />
                </div>
                <span className="text-base font-medium  ">قبول</span>
              </div>
            </div>
          </div>

          {/* --- CONTROLS --- */}
          <div className="flex gap-3 w-full">
            <Button
              variant="outline"
              onClick={() => setImage(null)}
              className="flex-1 rounded-xl"
            >
              <X className="mr-2 h-4 w-4" /> Change Image
            </Button>

            <Button
              variant="default"
              className="flex-1 font-bold rounded-xl"
              onClick={() => console.log("Downloading...")}
            >
              Generate Meme
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadImageUI;
