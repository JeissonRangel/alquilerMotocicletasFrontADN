import { HttpResponse } from "@angular/common/http";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpService } from "@core/services/http.service";
import { environment } from "src/environments/environment";
import { Motocicleta } from "../model/motocicleta";
import { MotocicletaService } from "./motocicleta.service";

describe("LibroService", () => {
    let motocicletaService: MotocicletaService;
    let motocicletaServiceMock: HttpTestingController;
  
    beforeEach(() => {
      const injector = TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [MotocicletaService, HttpService],
      });
      motocicletaServiceMock = injector.inject(HttpTestingController);
      motocicletaService = TestBed.inject(MotocicletaService);
    });
  
    it("Debe crear el servicio", () => {
      expect(motocicletaService).toBeTruthy();
    });
  
    it("Debe crear uuna motocicleta", () => {
      let dummyMotocicleta: Motocicleta = new Motocicleta(
        1, 
        "YAMAHA R1", 
        1000, 
        2020, 
        true
      );
  
      motocicletaService.guardar(dummyMotocicleta).subscribe((respuesta) => {
        expect(respuesta).toEqual(true);
      });
  
      const request = motocicletaServiceMock.expectOne(
        `${environment.endpoint}/motocicleta`
      );
      expect(request.request.method).toBe("POST");
      request.event(new HttpResponse<boolean>({ body: true }));
    });
  
    it("Debe consultar los libros creados", () => {
      let dummyMotocicletas: Motocicleta[] = [
        new Motocicleta(
            1, 
            "YAMAHA R1", 
            1000, 
            2020, 
            true
          ),
      ];
      let cantidadMotocicletas = dummyMotocicletas.length;
  
      motocicletaService.consultar().subscribe((libros) => {
        expect(libros.length).toBe(cantidadMotocicletas);
        expect(libros).toEqual(dummyMotocicletas);
      });
  
      const request = motocicletaServiceMock.expectOne(
        `${environment.endpoint}/motocicleta`
      );
      expect(request.request.method).toBe("GET");
      request.flush(dummyMotocicletas);
    });
  });
  