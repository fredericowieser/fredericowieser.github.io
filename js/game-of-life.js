document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.createElement('canvas');
    canvas.id = 'game-of-life-canvas';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const resolution = 10;
    let cols, rows;
    let grid;
    let running = true;

    function setup() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        cols = Math.ceil(canvas.width / resolution);
        rows = Math.ceil(canvas.height / resolution);
        grid = makeGrid(cols, rows);
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j] = Math.floor(Math.random() * 2);
            }
        }
        draw();
        setInterval(update, 100);
    }

    function update() {
        if (!running) return;
        const nextGrid = makeGrid(cols, rows);
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const neighbors = countNeighbors(grid, i, j);
                const state = grid[i][j];
                if (state === 0 && neighbors === 3) {
                    nextGrid[i][j] = 1;
                } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
                    nextGrid[i][j] = 0;
                } else {
                    nextGrid[i][j] = state;
                }
            }
        }
        grid = nextGrid;
        draw();
    }

    function makeGrid(cols, rows) {
        return new Array(cols).fill(null)
            .map(() => new Array(rows).fill(0));
    }

    function countNeighbors(grid, x, y) {
        let sum = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (i === 0 && j === 0) continue;
                const col = (x + i + cols) % cols;
                const row = (y + j + rows) % rows;
                sum += grid[col][row];
            }
        }
        return sum;
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(128, 128, 128, 0.5)';
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                if (grid[i][j] === 1) {
                    const x = i * resolution;
                    const y = j * resolution;
                    ctx.fillRect(x, y, resolution, resolution);
                }
            }
        }
    }

    canvas.addEventListener('click', function (event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const col = Math.floor(x / resolution);
        const row = Math.floor(y / resolution);
        if (grid[col] && grid[col][row] !== undefined) {
            grid[col][row] = grid[col][row] ? 0 : 1;
            draw();
        }
    });

    window.addEventListener('resize', setup);

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            running = !running;
        }
    });

    setup();
});