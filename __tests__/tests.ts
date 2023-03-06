import capitalizeTile from '../src/index';

describe("Test Conversion", () => {
    test("empresa de prueba sa de cv", () => {
        expect(capitalizeTile('empresa de prueba sa de cv')).toBe("Empresa de Prueba SA de CV");
    });

    test("empresa de prueba sa de cv", () => {
        expect(capitalizeTile('empresa de prueba sa de cv',[],[])).toBe("Empresa De Prueba Sa De Cv");
    });


    test("eMprEsA dE prUebA s.A. dE C.v.", () => {
        expect(capitalizeTile('eMprEsA dE prUebA s.A. dE C.v.')).toBe("Empresa de Prueba S.A. de C.V.");
    });

});