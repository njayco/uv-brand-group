import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SplashScreen from "@/components/SplashScreen";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import HundredApps from "@/pages/HundredApps";
import ApplyForProject from "@/pages/ApplyForProject";
import CompanyStructure from "@/pages/CompanyStructure";
import Contact from "@/pages/Contact";
import Placeholder from "@/pages/Placeholder";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/100-apps" component={HundredApps} />
      <Route path="/apply" component={ApplyForProject} />
      <Route path="/structure" component={CompanyStructure} />
      <Route path="/contact" component={Contact} />
      <Route path="/donate" component={Placeholder} />
      <Route path="/gift" component={Placeholder} />
      <Route path="/fund" component={Placeholder} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {showSplash ? (
          <SplashScreen onEnter={() => setShowSplash(false)} />
        ) : (
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
