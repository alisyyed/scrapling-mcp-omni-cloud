/**
 * 555 Universal Cloud MCP Foundry v6.0 - Zero-Cache Edge-Smart Worker Router
 * Engine: Scrapling (D4Vinci) Omni-Nexus (scrapling)
 */
const GITHUB_API_LIVE_JSON_URL = "https://api.github.com/repos/alisyyed/scrapling-mcp-omni-cloud/contents/LIVE_MCP_URL.json?ref=main";
const GITHUB_RAW_LIVE_JSON_URL = "https://raw.githubusercontent.com/alisyyed/scrapling-mcp-omni-cloud/main/LIVE_MCP_URL.json";
const GITHUB_DISPATCH_URL = "https://api.github.com/repos/alisyyed/scrapling-mcp-omni-cloud/actions/workflows/perpetual_relay.yml/dispatches";
const AUTO_WAKE_GH_TOKEN = "";
const EDGE_CURATED_TOOLS = [{"name": "orchestrate_obscura_v8_to_gpu_cuda_with_sqlite_vault", "description": "[Scrapling (D4Vinci) Omni-Nexus] Composite 3-Stage Pipeline: (1) obscura_v8_fetch -> (2) gpu_cuda_tensor_or_llm_infer -> (3) sqlite_vault_commit with automatic SMod0 rollback.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_doctor_and_status", "description": "[Scrapling (D4Vinci) Omni-Nexus] Verify scrapling checkout, binaries, and 24/7 Cloud VM health.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_discover_all_hidden_capabilities", "description": "[Scrapling (D4Vinci) Omni-Nexus] Runtime auto-introspection on the 24/7 Cloud VM: scans --help, Makefile, package.json, pyproject.toml, Cargo.toml, mcp.json, and all scripts/modules.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_run_any_subcommand_or_script", "description": "[Scrapling (D4Vinci) Omni-Nexus] Universal dynamic executor: invoke any discovered CLI subcommand, flag, or internal script inside scrapling.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_cli_build_backend", "description": "[Scrapling (D4Vinci) Omni-Nexus] Execute Python entrypoint `build-backend` defined in `pyproject.toml`.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_cli_name", "description": "[Scrapling (D4Vinci) Omni-Nexus] Execute Python entrypoint `name` defined in `pyproject.toml`.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_cli_version", "description": "[Scrapling (D4Vinci) Omni-Nexus] Execute Python entrypoint `version` defined in `pyproject.toml`.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_cli_scrapling", "description": "[Scrapling (D4Vinci) Omni-Nexus] Execute Python entrypoint `scrapling` defined in `pyproject.toml`.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_cli_scrapling_mcp", "description": "[Scrapling (D4Vinci) Omni-Nexus] Execute Python entrypoint `scrapling-mcp` defined in `pyproject.toml`.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_cli_python_version", "description": "[Scrapling (D4Vinci) Omni-Nexus] Execute Python entrypoint `python_version` defined in `pyproject.toml`.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_native_mcp_manifest_bridge", "description": "[Scrapling (D4Vinci) Omni-Nexus] Inspect and invoke native MCP definitions from `server.json`.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_cmd_covers", "description": "[Scrapling (D4Vinci) Omni-Nexus] Execute CLI subcommand `Scrapling covers` discovered in README.md.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_cmd_handles", "description": "[Scrapling (D4Vinci) Omni-Nexus] Execute CLI subcommand `Scrapling handles` discovered in README.md.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_cmd_runs", "description": "[Scrapling (D4Vinci) Omni-Nexus] Execute CLI subcommand `Scrapling runs` discovered in README.md.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_cmd_matches", "description": "[Scrapling (D4Vinci) Omni-Nexus] Execute CLI subcommand `Scrapling matches` discovered in README.md.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_cmd_have", "description": "[Scrapling (D4Vinci) Omni-Nexus] Execute CLI subcommand `Scrapling have` discovered in README.md.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_obscura_live_docs_bridge", "description": "[Scrapling (D4Vinci) Omni-Nexus] Scrape live docs, releases, and issues for D4Vinci/Scrapling via Obscura V8.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_smod0_verified_pipeline", "description": "[Scrapling (D4Vinci) Omni-Nexus] 3-Stage Composite: run scrapling -> cross-map with 9-Engine Cloud Mesh -> Check2 SMod0 guard.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "gpu_cloudflare_workers_ai_infer", "description": "[Scrapling (D4Vinci) Omni-Nexus] Run 24/7 free serverless GPU LLM/embedding inference on Cloudflare Workers AI Edge (10,000 Neurons/day, zero PC).", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "gpu_cuda_pytorch_or_llamacpp_exec", "description": "[Scrapling (D4Vinci) Omni-Nexus] Execute PyTorch CUDA tensor ops, CuPy kernels, or quantized llama.cpp/LLM4Decompile inference on Cloud Colab T4 / Kaggle 2xT4 / Workers AI.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "gpu_nvidia_smi_and_vram_probe", "description": "[Scrapling (D4Vinci) Omni-Nexus] Inspect live NVIDIA CUDA GPU model, driver version, free/total VRAM, PyTorch CUDA status, and AVX2 fallback.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "gpu_hybrid_offload_dispatcher", "description": "[Scrapling (D4Vinci) Omni-Nexus] Auto-route heavy compute to Cloud Workers AI / Colab T4 GPU when online, with seamless fallback to 24/7 Cloud CPU.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "elf_pe_prx_header_triage", "description": "[Scrapling (D4Vinci) Omni-Nexus] Inspect ELF/PE/PRX/SELF magic headers, sections, Shannon entropy, and security mitigations (NX/Canary/RELRO).", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "ioctl_switch_table_decoder", "description": "[Scrapling (D4Vinci) Omni-Nexus] Decode Windows/PS5 kernel driver IOCTL 32-bit control codes (DeviceType, Function, Method, Access).", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "yara_signature_synthesizer", "description": "[Scrapling (D4Vinci) Omni-Nexus] Generate high-precision YARA & FLIRT byte-pattern rules from hex opcodes or unique binary strings.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "memfd_ram_sandbox_exec", "description": "[Scrapling (D4Vinci) Omni-Nexus] Execute compiled C/ELF payloads inside an anonymous Linux os.memfd_create RAM descriptor (/proc/self/fd).", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "c_struct_layout_reconstructor", "description": "[Scrapling (D4Vinci) Omni-Nexus] Reconstruct padded C/C++20 struct definitions and vtable offsets from raw decompiler field accesses.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "obscura_v8_spa_snapshot", "description": "[Scrapling (D4Vinci) Omni-Nexus] Render JavaScript SPA via Obscura 0.2.7 V8 engine and return full accessibility/DOM tree snapshot.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "obscura_multi_worker_burst", "description": "[Scrapling (D4Vinci) Omni-Nexus] Parallel-scrape up to 25 URLs simultaneously via Obscura Rust worker pool with per-URL ms telemetry.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "obscura_form_and_api_sniffer", "description": "[Scrapling (D4Vinci) Omni-Nexus] Auto-detect interactive DOM forms, hidden inputs, and XHR/fetch endpoints on any target URL.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "obscura_rust_png_pdf_capture", "description": "[Scrapling (D4Vinci) Omni-Nexus] Render webpage to PNG/PDF via Obscura zero-Chromium Rust paint engine (taffy + tiny-skia) with SHA-256 hash.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "obscura_llms_txt_harvester", "description": "[Scrapling (D4Vinci) Omni-Nexus] Locate and ingest /llms.txt, /sitemap.xml, and technical documentation indexes into clean Markdown.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "algernonist_1of1_originality_audit", "description": "[Scrapling (D4Vinci) Omni-Nexus] Run subtractive research QA, whitespace elimination, and 1-of-1 originality scoring on any draft.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "json_csv_schema_auto_ingestor", "description": "[Scrapling (D4Vinci) Omni-Nexus] Infer SQLite table schema from raw JSON/CSV payloads and batch-upsert records with provenance.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "check2_smod_error_predictor", "description": "[Scrapling (D4Vinci) Omni-Nexus] Run pre-flight error prediction across hierarchical SMod1-SMod9 and nested aSMod21/bSMod21/cSMod21 tiers.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "hexa_decompile_and_gcc_verify", "description": "[Scrapling (D4Vinci) Omni-Nexus] Chain Radare2/Cutter triage -> Ghidra/IDA lift -> LLM4Decompile C99 refine -> GCC -O0..-O3 assert check.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "anyps5_prx_import_audit_bridge", "description": "[Scrapling (D4Vinci) Omni-Nexus] Audit PS5 ELF/SELF imports -> cross-reference boykopovar/AnyPS5 PRX stubs -> generate C++20 fail-fast stub.", "inputSchema": {"type": "object", "properties": {"query": {"type": "string", "description": "Primary input query, URL, command, SQL statement, or text to process."}, "options_json": {"type": "string", "description": "Optional JSON object string with extra parameters (e.g. '{\"eval_js\": \"document.title\"}')."}}}}, {"name": "scrapling_hexa_engine_bridge", "description": "[Scrapling (D4Vinci) Omni-Nexus] Coordinate multi-engine tasks across Obscura, Radare2, Ghidra, IDA 9.5, LLM4Decompile, and Craft-Anything.", "inputSchema": {"type": "object", "properties": {"target_engine": {"type": "string", "description": "Target engine slug ('obscura', 'radare2', 'llm4decompile', 'ida_hexrays', 'craft_anything', 'ghidra')."}, "payload_json": {"type": "string", "description": "JSON payload to pass across the 6-engine bridge."}}}}];

async function triggerGithubAutoWake() {
  if (!AUTO_WAKE_GH_TOKEN) return false;
  try {
    const r = await fetch(GITHUB_DISPATCH_URL, {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + AUTO_WAKE_GH_TOKEN,
        "Accept": "application/vnd.github+json",
        "User-Agent": "555-Universal-MCP-Worker/3.2",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ref: "main" })
    });
    return r.status === 204 || r.status === 200;
  } catch (_) {
    return false;
  }
}

async function getLatestTunnelUrl() {
  if (AUTO_WAKE_GH_TOKEN) {
    try {
      const apiRes = await fetch(GITHUB_API_LIVE_JSON_URL + "&t=" + Date.now(), {
        headers: {
          "Authorization": "Bearer " + AUTO_WAKE_GH_TOKEN,
          "Accept": "application/vnd.github.raw+json",
          "User-Agent": "555-Universal-MCP-Worker/3.2",
          "X-GitHub-Api-Version": "2022-11-28"
        }
      });
      if (apiRes.ok) {
        return await apiRes.json();
      }
    } catch (_) {}
  }
  const res = await fetch(GITHUB_RAW_LIVE_JSON_URL + "?t=" + Date.now(), {
    headers: { "User-Agent": "555-Universal-MCP-Worker/3.2" }
  });
  if (!res.ok) throw new Error("Could not fetch LIVE_MCP_URL.json: HTTP " + res.status);
  return await res.json();
}

async function handleEdgeFallbackJsonRpc(body, upstreamErr, liveData) {
  const rpcId = body && body.id !== undefined ? body.id : 1;
  const method = (body && body.method) || "";
  const params = (body && body.params) || {};

  if (method === "initialize") {
    return {
      jsonrpc: "2.0",
      id: rpcId,
      result: {
        protocolVersion: "2025-03-26",
        capabilities: { tools: { listChanged: true } },
        serverInfo: { name: "scrapling-OmniNexus", version: "3.2.0" }
      }
    };
  }

  if (method === "notifications/initialized" || method.startsWith("notifications/")) {
    return { jsonrpc: "2.0", id: rpcId, result: {} };
  }

  if (method === "tools/list") {
    return {
      jsonrpc: "2.0",
      id: rpcId,
      result: { tools: EDGE_CURATED_TOOLS }
    };
  }

  if (method === "tools/call") {
    const tName = params.name || "";
    return {
      jsonrpc: "2.0",
      id: rpcId,
      result: {
        content: [{
          type: "text",
          text: JSON.stringify({
            status: "EDGE_HYBRID_RESPONSE",
            engine: "scrapling",
            title: "Scrapling (D4Vinci) Omni-Nexus",
            tool_called: tName,
            arguments_received: params.arguments || {},
            obscura_first_bridge: "https://obscura-mcp-forever.forested-lung.workers.dev/mcp",
            live_relay_state: liveData || { status: "BOOTING_OR_WAKING", detail: String(upstreamErr || "Tunnel warming up (~20s)") }
          }, null, 2)
        }]
      }
    };
  }

  return { jsonrpc: "2.0", id: rpcId, result: {} };
}

export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept, MCP-Session-Id, Last-Event-ID"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    const url = new URL(request.url);
    let parsedBody = null;
    let rawBodyBuffer = undefined;
    if (request.method !== "GET" && request.method !== "HEAD") {
      rawBodyBuffer = await request.arrayBuffer();
      try {
        parsedBody = JSON.parse(new TextDecoder().decode(rawBodyBuffer));
      } catch (_) {}
    }

    if (parsedBody && parsedBody.method === "tools/call" && parsedBody.params && parsedBody.params.name === "gpu_cloudflare_workers_ai_infer") {
      const rpcId = parsedBody.id !== undefined ? parsedBody.id : 1;
      const args = parsedBody.params.arguments || {};
      const prompt = String(args.query || "Summarize GPU edge inference status in one sentence.");
      let model = "@cf/meta/llama-3.1-8b-instruct";
      try {
        const parsedOpts = args.options_json ? JSON.parse(args.options_json) : {};
        if (parsedOpts.model) model = parsedOpts.model;
      } catch (_) {}
      if (env && env.AI) {
        try {
          const aiResp = await env.AI.run(model, { prompt: prompt });
          return new Response(JSON.stringify({
            jsonrpc: "2.0",
            id: rpcId,
            result: { content: [{ type: "text", text: JSON.stringify({ status: "CLOUDFLARE_WORKERS_AI_GPU_OK", model: model, output: aiResp }, null, 2) }] }
          }), { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } });
        } catch (aiErr) {
          return new Response(JSON.stringify({
            jsonrpc: "2.0",
            id: rpcId,
            result: { content: [{ type: "text", text: JSON.stringify({ status: "WORKERS_AI_ERROR", model: model, error: String(aiErr) }, null, 2) }] }
          }), { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } });
        }
      }
    }

    if (parsedBody && (
      parsedBody.method === "initialize" ||
      parsedBody.method === "notifications/initialized" ||
      parsedBody.method === "tools/list"
    )) {
      return new Response(JSON.stringify(await handleEdgeFallbackJsonRpc(parsedBody, null, null)), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }

    let live = null;
    try {
      live = await getLatestTunnelUrl();
      const mcpUrl = String((live && live.mcp_url) || "").trim();
      if (!mcpUrl.startsWith("https://")) {
        throw new Error("LIVE_MCP_URL.json mcp_url is warming up: " + JSON.stringify(mcpUrl));
      }
      const targetBase = mcpUrl.replace(/\/mcp\/?$/, "");
      const targetUrl = targetBase + url.pathname + url.search;

      if (request.method === "GET" && (url.pathname === "/status" || url.pathname === "/")) {
        return new Response(JSON.stringify({
          status: "UNIVERSAL_WORKER_ONLINE",
          engine: "scrapling",
          title: "Scrapling (D4Vinci) Omni-Nexus",
          active_backend_mcp_url: live.mcp_url,
          updated_at: live.updated_at
        }, null, 2), {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders }
        });
      }

      const proxyReq = new Request(targetUrl, {
        method: request.method,
        headers: request.headers,
        body: rawBodyBuffer,
      });
      const resp = await fetch(proxyReq);
      if (resp.status === 530 || resp.status === 502) {
        await triggerGithubAutoWake();
        throw new Error("Upstream tunnel rotated (HTTP " + resp.status + ") - triggered Auto-Wake!");
      }
      const newHeaders = new Headers(resp.headers);
      newHeaders.set("Access-Control-Allow-Origin", "*");
      return new Response(resp.body, { status: resp.status, headers: newHeaders });
    } catch (err) {
      await triggerGithubAutoWake();
      if (parsedBody) {
        return new Response(JSON.stringify(await handleEdgeFallbackJsonRpc(parsedBody, err, live)), {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders }
        });
      }
      return new Response(JSON.stringify({
        status: "AUTO_WAKING_CLOUD_RELAY",
        engine: "scrapling",
        title: "Scrapling (D4Vinci) Omni-Nexus",
        live_json_state: live,
        message: "Signaled your 24/7 GitHub Cloud Relay to wake (~25s)."
      }, null, 2), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }
  }
};
