import React from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";

export const IphoneProMax = (): JSX.Element => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="bg-white overflow-hidden w-full min-w-[430px] h-[932px] relative">
      <header className="absolute w-[76.74%] h-[3.65%] top-[6.12%] left-[35.58%] flex items-center justify-center">
        <h1 className="[font-family:'Figtree',Helvetica] font-bold text-primary-color text-2xl tracking-[3.12px] leading-[normal]">
          MYPROTEIN
        </h1>
      </header>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-[63px] left-[105px] w-7 h-[27px] p-0"
      >
        <img className="w-7 h-[27px]" alt="Back" src="/group-2.png" />
      </Button>

      <h2 className="absolute w-[91.40%] h-[3.65%] top-[12.55%] left-[4.19%] flex items-center justify-center [font-family:'Figtree',Helvetica] font-bold text-black text-[28px] tracking-[3.64px] leading-[normal]">
        Log in to continue
      </h2>

      <div className="absolute top-[17.81%] left-[4.19%] w-[91.40%]">
        <div className="flex items-center justify-between mb-2">
          <Label className="[font-family:'Figtree',Helvetica] font-bold text-black text-base tracking-[2.08px] leading-[normal]">
            Email Address
          </Label>
          <span className="[font-family:'Figtree',Helvetica] font-normal text-black text-[13px] tracking-[1.69px] leading-[normal]">
            (required)
          </span>
        </div>
        <Input
          type="email"
          className="w-full h-[59px] bg-white rounded-[5px] border border-solid border-[#e6e6e6]"
        />
      </div>

      <div className="absolute top-[30.36%] left-[4.19%] w-[91.40%]">
        <Label className="[font-family:'Figtree',Helvetica] font-bold text-black text-base tracking-[2.08px] leading-[normal] mb-2 block">
          Password
        </Label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            className="w-full h-[59px] bg-white rounded-[5px] border border-solid border-[#e6e6e6] pr-16"
          />
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 [font-family:'Figtree',Helvetica] font-light text-black text-[13px] tracking-[1.69px] leading-[normal] h-auto p-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            Show
          </Button>
        </div>
      </div>

      <Button className="absolute top-[440px] left-[18px] w-[393px] h-[59px] bg-primary-color rounded-[5px] [font-family:'Figtree',Helvetica] font-bold text-white text-xl tracking-[0] leading-4 hover:bg-primary-color/90">
        Login
      </Button>

      <Button
        variant="link"
        className="absolute top-[505px] left-[147px] w-[330px] h-[34px] [font-family:'Figtree',Helvetica] font-extrabold text-black text-base tracking-[0.80px] leading-[normal] underline"
      >
        Forget Password?
      </Button>

      <h3 className="absolute w-[76.74%] h-[3.65%] top-[59.76%] left-[7.67%] flex items-center justify-center [font-family:'Figtree',Helvetica] font-bold text-black text-xl tracking-[2.60px] leading-[normal]">
        Continue with
      </h3>

      <Button className="absolute top-[598px] left-[18px] w-[393px] h-[62px] bg-[#3b5998] rounded overflow-hidden border border-solid border-[#e6e6e6] hover:bg-[#3b5998]/90">
        <div className="flex items-center gap-2">
          <div className="w-[25px] h-[25px] bg-[#4267b2] rounded-[1px] overflow-hidden flex items-center justify-center">
            <span className="[font-family:'Segoe_UI-Bold',Helvetica] font-bold text-white text-2xl tracking-[0] leading-[18px]">
              f
            </span>
          </div>
          <span className="[font-family:'Figtree',Helvetica] font-bold text-white text-xl tracking-[0] leading-4">
            Facebook
          </span>
        </div>
      </Button>

      <Button
        variant="outline"
        className="absolute top-[675px] left-[18px] w-[393px] h-[62px] bg-white rounded overflow-hidden border border-solid border-[#e6e6e6]"
      >
        <div className="flex items-center gap-[7px]">
          <img
            className="w-[25px] h-[27px] object-cover"
            alt="Google"
            src="/screenshot-2025-07-29-154147-1.png"
          />
          <span className="[font-family:'Figtree',Helvetica] font-bold text-black text-xl tracking-[0] leading-4">
            Google
          </span>
        </div>
      </Button>

      <div className="absolute top-[762px] left-[18px] w-[395px] h-[15px] flex items-center gap-[5px]">
        <Separator className="flex-1" />
        <span className="[font-family:'Segoe_UI-Bold',Helvetica] font-bold text-neutral-500 text-[13px] tracking-[0] leading-[15px] whitespace-nowrap">
          OR
        </span>
        <Separator className="flex-1" />
      </div>

      <Button
        variant="link"
        className="absolute top-[803px] left-[85px] w-[390px] h-[34px] [font-family:'Figtree',Helvetica] font-bold text-black text-xl tracking-[-0.20px] leading-[normal] underline"
      >
        New Here? Sign up today!
      </Button>

      <img
        className="absolute top-[867px] left-0 w-[72px] h-[65px] object-cover"
        alt="Accessibility"
        src="/screenshot-2025-07-29-154248-1.png"
      />
    </div>
  );
};
