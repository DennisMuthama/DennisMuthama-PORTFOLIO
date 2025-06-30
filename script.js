// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// MetaMask Integration (Optional)
async function connectMetaMask() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const balance = await provider.getBalance(accounts[0]);
            alert(`Connected: ${accounts[0]}\nBalance: ${ethers.utils.formatEther(balance)} ETH`);
        } catch (error) {
            console.error(error);
        }
    } else {
        alert('MetaMask not detected!');
    }
}

// Add this to a button if you want wallet connectivity
// document.getElementById('connect-wallet').addEventListener('click', connectMetaMask);