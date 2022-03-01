import { HttpResponse } from "@angular/common/http";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpService } from "@core/services/http.service";
import { environment } from "src/environments/environment";
import { Alquiler } from "../model/alquiler";
import { AlquilerService } from "./alquiler.service";

describe("AlquilerService", () => {
    let alquilerService: AlquilerService;
    let alquilerServiceMock: HttpTestingController;
  
    beforeEach(() => {
      const injector = TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [AlquilerService, HttpService],
      });
      alquilerServiceMock = injector.inject(HttpTestingController);
      alquilerService = TestBed.inject(AlquilerService);
    });
  
    it("Debe crear el servicio", () => {
      expect(alquilerService).toBeTruthy();
    });
  
    it("Debe crear un alquiler", () => {
      let dummyAlquiler: Alquiler = new Alquiler(
        1,
        1, 
        1, 
        20, 
        true, 
        true
      );
  
      alquilerService.guardar(dummyAlquiler).subscribe((respuesta) => {
        expect(respuesta).toEqual(true);
      });
  
      const request = alquilerServiceMock.expectOne(
        `${environment.endpoint}/alquiler`
      );
      expect(request.request.method).toBe("POST");
      request.event(new HttpResponse<boolean>({ body: true }));
    });
  
    it("Debe consultar los alquileres creados", () => {
      let dummyAlquiler: Alquiler[] = [
        new Alquiler(
            1,
            1, 
            1, 
            20, 
            true, 
            true
        ),
      ];
      let cantidadMotocicletas = dummyAlquiler.length;
  
      alquilerService.consultar().subscribe((libros) => {
        expect(libros.length).toBe(cantidadMotocicletas);
        expect(libros).toEqual(dummyAlquiler);
      });
  
      const request = alquilerServiceMock.expectOne(
        `${environment.endpoint}/alquiler`
      );
      expect(request.request.method).toBe("GET");
      request.flush(dummyAlquiler);
    });
  });
  