---
permalink: /
title: "About Me"
layout: claude
nav_active: home
show_header: true
excerpt: "An RuiHe (Andy) — MS Student at NUS. Research in Embodied AI, Multimodal LLM, and 3D Vision."
---

<section id="about" class="fade-section">
  <h2>About</h2>
  <p>
    I am an MS student at the <strong>National University of Singapore (NUS)</strong>, working with
    <a href="https://sites.google.com/view/showlab/home" target="_blank"><strong>Show Lab</strong></a> and advised by
    Prof. <a href="https://zhen720.github.io/" target="_blank">Mike Zheng Shou</a>.
    Prior to NUS, I received my B.E. in Computer Science from <strong>Zhejiang University</strong>,
    where I was advised by Prof. Juncheng Li.
  </p>
  <br>
  <p>
    My research lies at the intersection of <strong>embodied AI</strong>, <strong>multimodal large language models</strong>,
    and <strong>3D scene understanding</strong>. I am passionate about building AI systems that can perceive,
    reason about, and act in the physical world. My work includes physical necessity reasoning for heterogeneous
    multi-robot manipulation (<a href="https://arxiv.org/abs/2611.32803" target="_blank">MRBench</a>),
    hallucination mitigation in LVLMs, and real-time scene understanding for wearable smart-vision aids.
  </p>
</section>

<section id="news" class="fade-section">
  <h2>News</h2>
  <div class="news-item">
    <span class="news-date">2026.11</span>
    <span class="news-content"><span class="label">Paper</span> <a href="https://arxiv.org/abs/2611.32803" target="_blank"><em>MRBench</em></a> is available on arXiv: benchmarking physical necessity reasoning in heterogeneous multi-robot manipulation.</span>
  </div>
  <div class="news-item">
    <span class="news-date">2026.09</span>
    <span class="news-content"><span class="label">Survey</span> Released <em><a href="https://showlab.github.io/Awesome-Multimodal-Embodied-Agent/" target="_blank">Awesome Multimodal Embodied Agents: From Computer-Use to Robot-Use</a></em> — PAPAV (Perceive → Anticipate → Plan → Act → Verify), a capability-centric map of the Agent × Robotics landscape, with an analysis of 64 benchmarks.</span>
  </div>
  <div class="news-item">
    <span class="news-date">2026.03</span>
    <span class="news-content"><span class="label">Joined</span> Alibaba Tongyi Lab (Wanxiang) as Data &amp; Algorithm Intern, working on universal inverse dynamics models and cross-domain action alignment.</span>
  </div>
  <div class="news-item">
    <span class="news-date">2025.11</span>
    <span class="news-content"><span class="label">Joined</span> ACE Robotics as Embodied Intelligence Intern, working on Qwen3-VL fine-tuning and spatial intelligence data pipelines.</span>
  </div>
  <div class="news-item">
    <span class="news-date">2025.05</span>
    <span class="news-content"><span class="label">Paper</span> <em>Causal-LLaVA</em> published on arXiv — mitigating hallucinations in multimodal LLMs via causal disentanglement.</span>
  </div>
  <div class="news-item">
    <span class="news-date">2025.04</span>
    <span class="news-content"><span class="label">Joined</span> Unitree Robotics as Assistant Engineer, developing guidance systems for the Unitree G1 humanoid robot.</span>
  </div>
</section>

<section id="publications" class="fade-section">
  <h2>Publications</h2>
  <div class="pub-item">
    <button class="pub-thumb pub-video" type="button" aria-label="Play MRBench Spring Doors demo">
      <video muted loop playsinline preload="metadata" poster="/images/papers/mrbench-cover.jpg" aria-hidden="true">
        <source src="/images/papers/mrbench-demo.mp4" type="video/mp4">
      </video>
    </button>
    <div class="pub-content">
    <div class="pub-title">
      MRBench: Benchmarking Physical Necessity Reasoning in Heterogeneous Multi-Robot Manipulation
      <span class="pub-badge">arXiv 2026</span>
    </div>
    <div class="pub-meta">Yanzhe Chen, Zhijun Cao, <strong>Ruihe An</strong>, Chang Gong, Mike Zheng Shou</div>
    <div class="pub-meta"><a href="https://arxiv.org/abs/2611.32803" target="_blank">arXiv:2611.32803</a> &nbsp;·&nbsp; <a href="https://showlab.github.io/MRBench/" target="_blank">Project Page</a></div>
    </div>
  </div>
  <div class="pub-item">
    <a class="pub-thumb papav-thumb" href="https://showlab.github.io/Awesome-Multimodal-Embodied-Agent/" target="_blank" rel="noopener noreferrer">
      <span class="papav-label">PAPAV</span>
      <img src="/images/papers/embodied-agents.png" alt="Perceive, Anticipate, Plan, Act, and Verify, illustrated for computer use and robot use" width="2050" height="853" loading="lazy" decoding="async">
    </a>
    <div class="pub-content">
    <div class="pub-title">
      Awesome Multimodal Embodied Agents: From Computer-Use to Robot-Use
      <span class="pub-badge">Survey 2026</span>
    </div>
    <div class="pub-meta">Yanzhe Chen, Ziyi Yang, Jifeng Zhu, Qiming Huang, <strong>An RuiHe</strong>, Peiyao Xu, Hesen Yang, Runda Liu, Chang Gong, Zhijun Cao, Zechen Bai, Wenzheng Zeng, Yiqi Lin, Guoqiang Liang, Kevin Yuchen Ma, Kevin Qinghong Lin, Mike Zheng Shou<sup>&dagger;</sup> (Show Lab, NUS)</div>
    <div class="pub-meta"><a href="https://arxiv.org/abs/2610.30108" target="_blank" rel="noopener noreferrer">arXiv:2610.30108</a> &nbsp;·&nbsp; <a href="https://github.com/showlab/Awesome-Multimodal-Embodied-Agent/blob/main/assets/SURVEY_Multimodal_Embodied_Agent.pdf" target="_blank">PDF</a> &nbsp;·&nbsp; <a href="https://showlab.github.io/Awesome-Multimodal-Embodied-Agent/" target="_blank">Project Page</a> &nbsp;·&nbsp; <a href="https://github.com/showlab/Awesome-Multimodal-Embodied-Agent" target="_blank">GitHub</a></div>
    </div>
  </div>
  <div class="pub-item">
    <a class="pub-thumb" href="https://arxiv.org/abs/2505.19474" target="_blank" rel="noopener noreferrer"><img src="/images/papers/causal-llava.png" alt="Causal-LLaVA architecture for mitigating multimodal hallucinations" loading="lazy" decoding="async"></a>
    <div class="pub-content">
    <div class="pub-title">
      Causal-LLaVA: Causal Disentanglement for Mitigating Hallucination in Multimodal Large Language Models
      <span class="pub-badge">arXiv 2025</span>
    </div>
    <div class="pub-meta">Xinmiao Hu, Chun Wang, <strong>An RuiHe</strong>, ChenYu Shao, Xiaojun Ye, Sheng Zhou, Liangcheng Li (Zhejiang University)</div>
    <div class="pub-meta"><a href="https://arxiv.org/abs/2505.19474" target="_blank">arXiv:2505.19474</a></div>
    </div>
  </div>
</section>
