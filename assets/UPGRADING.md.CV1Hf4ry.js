import{_ as a,c as n,o as e,ae as t}from"./chunks/framework.CukfVyiB.js";const u=JSON.parse('{"title":"MIGRATION GUIDE","description":"","frontmatter":{},"headers":[],"relativePath":"UPGRADING.md","filePath":"UPGRADING.md"}'),i={name:"UPGRADING.md"};function p(l,s,o,h,r,d){return e(),n("div",null,s[0]||(s[0]=[t(`<h1 id="migration-guide" tabindex="-1">MIGRATION GUIDE <a class="header-anchor" href="#migration-guide" aria-label="Permalink to &quot;MIGRATION GUIDE&quot;">​</a></h1><p>Please read this guide when upgrading MAJOR VERSIONS of the package, list the BREAKING CHANGES and required changes you&#39;ll need to make to your code.</p><ul><li><a href="#from-v2-to-v3">From v2 to v3</a> (2025)</li><li><a href="#from-v1-to-v2">From v1 to v2</a> (2021)</li></ul><p><a name="from-v2-to-v3"></a></p><h2 id="upgrading-from-v2-to-v3-2025" tabindex="-1">Upgrading from v2 to v3 (2025) <a class="header-anchor" href="#upgrading-from-v2-to-v3-2025" aria-label="Permalink to &quot;Upgrading from v2 to v3 (2025)&quot;">​</a></h2><p><strong>v3 is still under active development</strong>, however, it has been published and you can install it with the <code>@next</code> tag from npm, e.g. <code>npm install yahoo-finance2@next-major</code>, or even <code>npm install yahoo-finance2@3</code>. Yes, the project is called &quot;yahoo-finance2&quot; and the version is &quot;3&quot;. <strong>These docs are not yet complete</strong>.</p><p>Despite the major version change, and significant changes under-the-hood, most of the library retains a familiar API.</p><p>The most impactful change is how to initialize the library, as explained by this diff:</p><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">- import yahooFinance from &quot;yahoo-finance2&quot;;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;">- yahooFinance.setGlobalConfig(options); // optional</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+ import YahooFinance from &quot;yahoo-finance2&quot;;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">+ const yahooFinance = new YahooFinance(/* options */);</span></span></code></pre></div><p>Other notable changes:</p><ul><li><strong>Running directly in the browser</strong> is no longer supported. You should perform the request to Yahoo Finance from a server / serverless / edge environment and send that data on to the client. XXX helper APIs XXX</li></ul><p><strong>Development</strong>:</p><p>There were significant changes to the development environment, please see the <a href="https://github.com/gadicc/node-yahoo-finance2/blob/devel/CONTRIBUTING.md" target="_blank" rel="noreferrer">CONTRIBUTING.md</a> file for more details.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>&lt;a name=&quot;from-v1-to-v2&quot;&gt;&lt;/a&gt;</span></span>
<span class="line"><span>## Upgrading from yahoo-finance v1 to v2 (2021)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Table of Contents</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. [General](#general)</span></span>
<span class="line"><span>2. [historical()](#historical)</span></span>
<span class="line"><span>3. [quote()](#quote)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;a name=&quot;general&quot;&gt;&lt;/a&gt;</span></span>
<span class="line"><span>## General</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. **symbol**: The most common change is that in v1, we accepted a \`symbol\` key</span></span>
<span class="line"><span>in the \`options\` dictionary. In v2, the \`symbol\` is usually the first</span></span>
<span class="line"><span>*parameter* to the function call. This is a lot more comfortable, as most APIs</span></span>
<span class="line"><span>take a single, required symbol or query parameter, and \`options\` are usually</span></span>
<span class="line"><span>optional.  See the examples below.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. **validation** and **typescript**: we go to much greater lengths to ensure</span></span>
<span class="line"><span>that the data you get is consistent, even though Yahoo often change their</span></span>
<span class="line"><span>API.  If you use the optional typescript, you get a lot of help and hints as</span></span>
<span class="line"><span>to what the query result will look like.  See the</span></span>
<span class="line"><span>[validation docs](./validation.md) for further info.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;a name=&quot;quote&quot;&gt;&lt;/a&gt;</span></span>
<span class="line"><span>## quote()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**NB: v1&#39;s \`quote()\` relates to v2&#39;s \`quoteSummary()\`**.  This was an</span></span>
<span class="line"><span>unfortunate lack of foresight on our part in v1 without releasing</span></span>
<span class="line"><span>Yahoo&#39;s API had an entirely different \`quote\` API too.  In v2, we align</span></span>
<span class="line"><span>exactly with Yahoo&#39;s API naming.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>The function signature has changed slightly, to remain consistent with the</span></span>
<span class="line"><span>rest of the library.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`js</span></span>
<span class="line"><span>// V1 took a single OPTIONS object as the only paramater</span></span>
<span class="line"><span>// The API was called &quot;quote&quot; (in v2, it&#39;s &quot;quoteSummary&quot;)</span></span>
<span class="line"><span>yahooFinanceV1.quote({ symbol, modules });</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  // Depends on modules argument:</span></span>
<span class="line"><span>  price: { /* ... */ },</span></span>
<span class="line"><span>  summaryDetail: { /* ... */ },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// V2 takes SYMBOL as 1st parameter, OPTIONS as 2nd.</span></span>
<span class="line"><span>// The API is called &quot;quoteSummary&quot; (in v1, it&#39;s &quot;quote&quot;)</span></span>
<span class="line"><span>yahooFinanceV2.quoteSummary(symbol, { modules });</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  // The output should otherwise be identical.</span></span>
<span class="line"><span>  // Please open an issue if you find any edge-cases.</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><strong>Query</strong></p><table tabindex="0"><thead><tr><th>Attribute</th><th>v1</th><th>v2+</th></tr></thead><tbody><tr><td><code>symbol</code></td><td>As a <code>{ symbol }</code> option</td><td>First argument to quoteSummary()</td></tr><tr><td><code>modules</code></td><td>Remains the same</td><td>Remains the same</td></tr></tbody></table><p>Note: v1 could also accept a <code>symbols</code> key (note the &quot;s&quot; at the end for plural). In v2 we accept a single symbol only, which more closely aligns to a single network request being made.</p><p><strong>Results</strong></p><table tabindex="0"><thead><tr><th>Attribute</th><th>v1</th><th>v2+</th></tr></thead><tbody><tr><td><code>symbol</code></td><td>Was included in each result</td><td>Not included in each result</td></tr></tbody></table><p><a name="historical"></a></p><h2 id="historical" tabindex="-1">historical() <a class="header-anchor" href="#historical" aria-label="Permalink to &quot;historical()&quot;">​</a></h2><p>The function signature has changed slightly, to remain consistent with the rest of the library.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// V1 took a single OPTIONS object as the only paramater</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yahooFinanceV1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">historical</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ symbol, from, to });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    date,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    open,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    high,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    low,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    close,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    adjClose,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    volume,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    symbol, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// was included</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// V2 takes SYMBOL as 1st parameter, OPTIONS as 2nd.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">yahooFinanceV2.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">historical</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(symbol, { period1 });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    date,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    open,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    high,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    low,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    close,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    adjClose,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    volume,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // symbol NOT included</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><p><strong>Query</strong></p><table tabindex="0"><thead><tr><th>Attribute</th><th>v1</th><th>v2+</th></tr></thead><tbody><tr><td><code>symbol</code></td><td>As a <code>{ symbol }</code> option</td><td>First argument to historical()</td></tr><tr><td><code>fields</code></td><td><code>{ from, to }</code></td><td><code>{ period1, period2 }</code>. Period2 defaults to now().</td></tr><tr><td>dates</td><td>&quot;YYYY-MM-dd&quot;</td><td>JS Date object, or any format <code>new Date()</code> understands , so &quot;YYYY-MM-dd&quot; still works fine too.</td></tr></tbody></table><p><strong>Results</strong></p><table tabindex="0"><thead><tr><th>Attribute</th><th>v1</th><th>v2+</th></tr></thead><tbody><tr><td><code>symbol</code></td><td>Was included in each result</td><td>Not included in each result</td></tr></tbody></table>`,27)]))}const g=a(i,[["render",p]]);export{u as __pageData,g as default};
