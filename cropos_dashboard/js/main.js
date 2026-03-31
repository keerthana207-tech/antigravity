document.addEventListener('DOMContentLoaded', () => {
    
    // --- Auth Logic ---
    const authOverlay = document.getElementById('auth-overlay');
    const mainApp = document.getElementById('main-app');
    const btnLogin = document.getElementById('btn-login');
    const btnRegister = document.getElementById('btn-register');
    const usernameInput = document.getElementById('auth-username');
    const passwordInput = document.getElementById('auth-password');
    const errorDiv = document.getElementById('auth-error');
    const userProfileName = document.querySelector('.user-name');
    
    // Check session
    const activeUser = localStorage.getItem('cropos_user');
    if (activeUser) {
        authOverlay.style.display = 'none';
        mainApp.style.display = 'grid';
        if(userProfileName) userProfileName.textContent = activeUser;
    }

    const handleAuth = async (isLogin) => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (!username || !password) {
            errorDiv.textContent = 'Please fill all fields';
            errorDiv.classList.remove('hidden');
            return;
        }

        const endpoint = isLogin ? '/api/login' : '/api/register';
        const btn = isLogin ? btnLogin : btnRegister;
        const originalText = btn.textContent;
        btn.textContent = 'Processing...';
        btn.disabled = true;

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();

            if (res.ok && data.success) {
                localStorage.setItem('cropos_user', username);
                if(userProfileName) userProfileName.textContent = username;
                authOverlay.classList.add('fade-out');
                setTimeout(() => {
                    authOverlay.style.display = 'none';
                    mainApp.style.display = 'grid';
                }, 400);
            } else {
                errorDiv.textContent = data.error || 'Authentication failed';
                errorDiv.classList.remove('hidden');
            }
        } catch (e) {
            errorDiv.textContent = 'Error connecting to server. Is it running?';
            errorDiv.classList.remove('hidden');
        } finally {
            btn.textContent = originalText;
            btn.disabled = false;
        }
    };

    if (btnLogin) btnLogin.addEventListener('click', () => handleAuth(true));
    if (btnRegister) btnRegister.addEventListener('click', () => handleAuth(false));
    if (passwordInput) passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleAuth(true);
    });

    // Logout button added via js for convenience
    const userProfileSection = document.querySelector('.user-profile');
    if (userProfileSection) {
        userProfileSection.style.cursor = 'pointer';
        userProfileSection.title = "Click to logout / switch account";
        userProfileSection.addEventListener('click', () => {
            localStorage.removeItem('cropos_user');
            window.location.reload();
        });
    }
    
    // --- Navigation Logic ---
    const navItems = document.querySelectorAll('.nav-item');
    const viewSections = document.querySelectorAll('.view-section');
    const pageTitle = document.getElementById('current-page-title');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active classes
            navItems.forEach(nav => nav.classList.remove('active'));
            viewSections.forEach(view => view.classList.remove('active'));
            viewSections.forEach(view => view.classList.add('hidden'));
            
            // Add active class to clicked nav
            item.classList.add('active');
            
            // Show corresponding view
            const targetId = item.getAttribute('data-target');
            const targetView = document.getElementById(targetId);
            
            if (targetView) {
                targetView.classList.remove('hidden');
                // Small delay to allow display flex/block to apply before animating opacity
                setTimeout(() => {
                    targetView.classList.add('active');
                }, 10);
            }
            
            // Update Page Title
            const tabName = item.querySelector('span:not(.badge)').innerText;
            pageTitle.innerText = tabName;
        });
    });

    // --- Agent Orchestra Simulation Logic ---
    const initOrchestraBtn = document.getElementById('run-orchestra-btn');
    const processingArea = document.getElementById('orchestra-processing');
    const responsesArea = document.getElementById('orchestra-responses');
    const agentMessages = document.querySelectorAll('.chat-message.agent');
    const finalDecision = document.querySelector('.orchestrator-final');
    const divider = document.querySelector('.orchestrator-divider');

    if (initOrchestraBtn) {
        initOrchestraBtn.addEventListener('click', () => {
            // Reset state
            initOrchestraBtn.disabled = true;
            initOrchestraBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
            
            responsesArea.classList.add('hidden');
            agentMessages.forEach(msg => msg.classList.add('hidden'));
            finalDecision.classList.add('hidden');
            if (divider) divider.classList.add('hidden');
            
            // Show processing
            processingArea.classList.remove('hidden');
            
            // Step 1: Simulate Agent Spawning and Threads fetching
            setTimeout(() => {
                processingArea.classList.add('hidden');
                responsesArea.classList.remove('hidden');
                
                // Show WeatherWise
                agentMessages[0].classList.remove('hidden');
                agentMessages[0].classList.add('fade-in');
            }, 2000);

            // Step 2: Show MarketMind Response
            setTimeout(() => {
                agentMessages[1].classList.remove('hidden');
                agentMessages[1].classList.add('fade-in');
            }, 3500);

            // Step 3: Show SoilSense Response
            setTimeout(() => {
                agentMessages[2].classList.remove('hidden');
                agentMessages[2].classList.add('fade-in');
            }, 4500);

            // Step 4: Show Consensus Divider
            setTimeout(() => {
                if (divider) {
                    divider.classList.remove('hidden');
                    divider.classList.add('fade-in');
                }
            }, 5500);

            // Step 5: Show Final Decision
            setTimeout(() => {
                finalDecision.classList.remove('hidden');
                finalDecision.classList.add('fade-in');
                
                // Reset Button
                initOrchestraBtn.disabled = false;
                initOrchestraBtn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Run Another Sim';
                
                // Scroll to bottom of chat
                const chatWindow = document.querySelector('.chat-window');
                chatWindow.scrollTop = chatWindow.scrollHeight;
                
            }, 6500);
        });
    }

    // --- Demo Interactions (Micro-animations) ---
    // Farm Map Plots
    const plots = document.querySelectorAll('.plot');
    plots.forEach(plot => {
        plot.addEventListener('click', function() {
            // Create a small ripple/pulse effect visually on click
            this.style.transform = 'translateZ(10px) scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});
