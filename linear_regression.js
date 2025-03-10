class RegressaoLinear {
    constructor() {
        this.m = 0;
        this.b = 0;
    }

    train (x, y) {
        const n = x.length;

        const xySum = x.map((valor, index) => valor * y[index]).reduce((acumulador, valor) => acumulador + valor, 0);
        const xSum = x.reduce((acumulador, valor) => acumulador + valor, 0);
        const ySum = y.reduce((acumulador, valor) => acumulador + valor, 0);
        const sumX2 = x.reduce((acumulador, valor) => acumulador + valor ** 2, 0);

        this.m = ((n * xySum) - (xSum * ySum)) / (n * sumX2 - (xSum ** 2));
        this.b = (ySum - (this.m * xSum)) / n;
    }

    predict (x) {
        return this.m * x + this.b;
    }
}

const modelo = new RegressaoLinear()
modelo.train([1, 2, 3, 4, 5], [50, 55, 65, 70, 75]);
console.log("Previsão para 8 horas de estudo", modelo.predict(2).toFixed(2))