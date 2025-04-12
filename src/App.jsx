import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-figtree">
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <div className="flex justify-center mb-4">
          <img
            src="https://github.com/pruettmt.png"
            alt="MT Pruett GitHub Profile"
            className="w-16 h-16 rounded-full border border-gray-600 shadow-lg"
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold mb-8 tracking-tight">MT Pruett</h1>

        <div className="space-y-6 text-gray-300 text-left text-[15px] leading-relaxed">
          <p>
            I'm a DevOps engineer who lives in Azure, Terraform, and Databricks.
          </p>
          <p>
            Most of my day-to-day is spent building cloud infrastructure that doesn't fall apart under pressure — automating the boring stuff, tightening up CI/CD pipelines, managing Databricks (Unity Catalog included), and helping teams move faster without breaking things. If there's a way to script it, automate it, or monitor it... I'm on it.
          </p>
          <p>
            I've learned (sometimes the hard way) how to keep cloud environments clean, secure, and scalable. Most of us don’t get to pick our stack — we use what the job calls for. This blog reflects that: the tools I’ve used, the problems I’ve hit, and the stuff I wish I knew sooner.
          </p>
          <p>
            The cloud’s always changing — and let’s be honest, sometimes it breaks. This blog is where I share what I’m learning, what I’ve messed up, and what actually works. If it saves you some pain, that’s a win.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">What I use a lot:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Azure (infra, security, automation, monitoring — the usual suspects)</li>
              <li>Terraform (IaC modules, state management, CI integration)</li>
              <li>Databricks (workspace admin, Unity Catalog, job orchestration, ACLs)</li>
              <li>CI/CD: GitHub Actions, Azure DevOps, Octopus</li>
              <li>Scripting: PowerShell, Bash, SQL, Git</li>
              <li>Tooling: VS Code, Git, terminal life</li>
            </ul>
          </div>

          <p>Thanks for dropping by.</p>
          <p>
            Just a heads up — I assume tools like Terraform, Git, VS Code, and any CLIs are already installed if you’re following along. I'll try to skip the setup fluff and get right to the good stuff.
          </p>
          <p>
            I take security seriously — so if I’m sharing real-world configs or issues I’ve worked through, I’ll always scrub out resource names, GUIDs, and anything sensitive. Sometimes it might feel like overkill, but better safe than sorry.
          </p>
        </div>
      </div>
    </div>
  );
}