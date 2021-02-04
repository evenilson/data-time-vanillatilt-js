const interval = setInterval(() => {
    const now = new Date();

    const date = now.toLocaleDateString('pt-BR');
    const time = now.toLocaleTimeString('pt-BR');

    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time;
}, 1000);
