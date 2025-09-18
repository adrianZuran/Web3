"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  Users,
  TrendingUp,
  Shield,
  Twitter,
  MessageCircle,
  Github,
  PieChart,
  BarChart3,
  Activity,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function NgabOwiHome() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background dark">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}></div>
        <div
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary/3 rounded-full blur-2xl animate-pulse delay-500"
          style={{
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.08}px)`,
          }}></div>
      </div>

      {/* Header */}
      <header className="bg-transparent backdrop-blur-md sticky top-0 z-50 border-b border-border/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/50 animate-pulse">
              <Image
                src="/ngabowi.jpg"
                alt="Ngabowi"
                width={300}
                height={300}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <span className="font-bold text-xl text-foreground">Ngab Owi</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#tokenomics"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
              Tokenomics
            </a>
            <a
              href="#roadmap"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
              Roadmap
            </a>
            <a
              href="#whatowi"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
              What’s Ngab
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
              Connect Wallet
            </Button>
          </nav>
        </div>
      </header>

      <section className="h-screen py-20 px-4 relative overflow-hidden z-10 flex items-center justify-center">
        {/* Video Background dengan Paralax */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover parallax-element"
            style={{
              transform: `translateY(${scrollY * 0.3}px) scale(1)`,
              filter: "brightness(0.5) contrast(1.2)",
            }}>
            <source src="/animasiJokowi.mp4" type="video/mp4" />
            {/* Fallback jika video tidak tersedia */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20"></div>
          </video>

          {/* Overlay untuk meningkatkan readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <Badge className="mb-4 bg-secondary/90 text-white border-secondary/30 shadow-lg shadow-secondary/20 animate-bounce">
              The Ultimate Indonesian Meme Coin
            </Badge>

            <div className="flex justify-center mb-8">
              <div className="w-96 h-96 [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                  {/* Depan */}
                  <div className="absolute w-full h-full rounded-2xl overflow-hidden shadow-xl shadow-primary/30 backface-hidden">
                    <Image
                      src="/ngabowi.jpg"
                      alt="Ngab Owi Meme"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Belakang */}
                  <div className="absolute w-full h-full rounded-2xl overflow-hidden shadow-xl shadow-secondary/30 [transform:rotateY(180deg)] backface-hidden">
                    <Image
                      src="/jkwhmb.jpeg"
                      alt="Ngab Owi Meme"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance animate-fade-in-up drop-shadow-lg"
              style={{ transform: `translateY(${scrollY * -0.2}px)` }}>
              Welcome to{" "}
              <span className="text-white drop-shadow-lg animate-pulse">
                Ngab Owi
              </span>
            </h1>
            <p
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty animate-fade-in-up delay-300 drop-shadow-md"
              style={{ transform: `translateY(${scrollY * -0.1}px)` }}>
              Join the most vibrant Indonesian crypto community! Ngab Owi brings
              together meme culture and Web3 innovation for the ultimate digital
              experience.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-500">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-all duration-300 hover:scale-105 animate-pulse">
              <Rocket className="mr-2 h-5 w-5" />
              Buy $NGAB
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-white bg-primary/20 hover:bg-primary cursor-pointer shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              Join Community
            </Button>
          </div>
        </div>
      </section>

      <section
        className="py-20 px-4 relative z-10 min-h-screen flex items-center"
        id="whatowi">
        <div className="container mx-auto">
          {/* Judul */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              What’s Ngab Owi?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Visual breakdown of our fair and transparent token allocation
            </p>
          </div>

          {/* Gambar + Teks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            {/* Gambar */}
            <div className="flex justify-center">
              <img
                src="/yondaktau-removebg-preview.png"
                alt="Ngab Owi Illustration"
                className="w-72 md:w-96 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center lg:text-left">
              <h1 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Kenapa Milih <i className="text-yellow-300">Ngab Owi?</i>
              </h1>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl mx-auto lg:mx-0">
                Ngab Owi adalah konsep sederhana tapi powerful yang dirancang
                untuk menciptakan ekosistem yang adil, transparan, dan mudah
                dipahami oleh semua orang. Tujuannya adalah memastikan setiap
                orang bisa berpartisipasi dengan nyaman.
              </p>
            </div>
          </div>

          {/* Grid Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/90 border-border backdrop-blur-sm hover:bg-card/95 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Users className="mr-2 h-5 w-5" />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2 text-primary">40%</div>
                <CardDescription>
                  Reserved for community rewards and airdrops
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/90 border-border backdrop-blur-sm hover:bg-card/95 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up delay-200">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Liquidity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2 text-primary">30%</div>
                <CardDescription>
                  Locked liquidity for stable trading
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/90 border-border backdrop-blur-sm hover:bg-card/95 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up delay-300">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Rocket className="mr-2 h-5 w-5" />
                  Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2 text-primary">20%</div>
                <CardDescription>
                  Platform development and partnerships
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card/90 border-border backdrop-blur-sm hover:bg-card/95 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up delay-400">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Shield className="mr-2 h-5 w-5" />
                  Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-2 text-primary">10%</div>
                <CardDescription>
                  Team allocation with 2-year vesting
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 h-screen relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
            About ngabowi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Visual breakdown of our fair and transparent token allocation
          </p>
        </div>
        <div data-aos="fade-up">
          <img
            src="/chuby-removebg-preview.png"
            alt=""
            className="mx-auto animate-fade-in-up"
          />
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-4 relative z-10 h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              Roadmap
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
              Our journey to becoming the top Indonesian meme coin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/90 border-border backdrop-blur-sm hover:bg-card/95 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up">
              <CardHeader>
                <Badge className="w-fit bg-primary/90 text-white border-primary/30 mb-2 shadow-lg shadow-primary/20">
                  Phase 1 - Complete
                </Badge>
                <CardTitle className="text-primary">
                  Launch & Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✅ Token Launch</li>
                  <li>✅ Community Building</li>
                  <li>✅ Social Media Presence</li>
                  <li>✅ Initial Partnerships</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/90 border-primary/50 backdrop-blur-sm hover:bg-card/95 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 animate-fade-in-up delay-200">
              <CardHeader>
                <Badge className="w-fit bg-secondary/90 text-white border-secondary/30 mb-2 shadow-lg shadow-secondary/20 animate-pulse">
                  Phase 2 - Current
                </Badge>
                <CardTitle className="text-primary">
                  Growth & Expansion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>🔄 DEX Listings</li>
                  <li>🔄 Influencer Partnerships</li>
                  <li>🔄 Meme Contests</li>
                  <li>🔄 Mobile App Development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/90 border-border backdrop-blur-sm hover:bg-card/95 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up delay-400">
              <CardHeader>
                <Badge className="w-fit bg-muted/80 text-white border-muted mb-2">
                  Phase 3 - Upcoming
                </Badge>
                <CardTitle className="text-primary">
                  Ecosystem & Utility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>⏳ NFT Marketplace</li>
                  <li>⏳ Staking Platform</li>
                  <li>⏳ Gaming Integration</li>
                  <li>⏳ Major Exchange Listings</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 bg-muted/30 relative z-10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
            Join Our Community
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Connect with thousands of Ngab Owi enthusiasts and stay updated with
            the latest news
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up delay-300">
            <Button
              size="lg"
              className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white shadow-lg shadow-[#1DA1F2]/30 hover:shadow-[#1DA1F2]/50 transition-all duration-300 hover:scale-105">
              <Twitter className="mr-2 h-5 w-5" />
              Follow on Twitter
            </Button>
            <Button
              size="lg"
              className="bg-[#0088cc] hover:bg-[#0088cc]/90 text-white shadow-lg shadow-[#0088cc]/30 hover:shadow-[#0088cc]/50 transition-all duration-300 hover:scale-105">
              <MessageCircle className="mr-2 h-5 w-5" />
              Join Telegram
            </Button>
            <Button
              size="lg"
              className="bg-[#5865F2] hover:bg-[#5865F2]/90 text-white shadow-lg shadow-[#5865F2]/30 hover:shadow-[#5865F2]/50 transition-all duration-300 hover:scale-105">
              <MessageCircle className="mr-2 h-5 w-5" />
              Discord Server
            </Button>
          </div>

          <Card className="max-w-2xl mx-auto bg-card/90 border-border backdrop-blur-sm hover:bg-card/95 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up delay-500">
            <CardHeader>
              <CardTitle className="text-primary">
                Live Community Stats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl font-bold text-primary animate-pulse">
                    15.2K
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Twitter Followers
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary animate-pulse delay-200">
                    8.7K
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Telegram Members
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary animate-pulse delay-300">
                    5.1K
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Discord Users
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary animate-pulse delay-500">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Active Chat
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/30 bg-card/30 backdrop-blur-sm relative z-10">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/50 animate-pulse">
              <Image
                src="/ngabowi.jpg"
                alt="Ngabowi"
                width={300}
                height={300}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <span className="font-bold text-xl text-foreground">Ngab Owi</span>
          </div>
          <p className="text-muted-foreground mb-4">
            The ultimate Indonesian meme coin bringing Web3 to the masses
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
              <Github className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-border/30 text-sm text-muted-foreground">
            © 2024 Ngab Owi. All rights reserved. | Not financial advice.
          </div>
        </div>
      </footer>
    </div>
  );
}
