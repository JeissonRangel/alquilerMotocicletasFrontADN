import { HttpResponse } from "@angular/common/http";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpService } from "@core/services/http.service";
import { environment } from "src/environments/environment";
import { Factura } from "../model/factura";
import { FacturaService } from "./factura.service";

describe("FacturaService", () => {
    let facturaService: FacturaService;
    let facturaServiceMock: HttpTestingController;
  
    beforeEach(() => {
      const injector = TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [FacturaService, HttpService],
      });
      facturaServiceMock = injector.inject(HttpTestingController);
      facturaService = TestBed.inject(FacturaService);
    });
  
    it("Debe crear el servicio", () => {
      expect(facturaService).toBeTruthy();
    });
  
    it("Debe crear una factura", () => {
      let dummyFactura: Factura = new Factura(
        1,
      );
  
      facturaService.guardar(dummyFactura).subscribe((respuesta) => {
        expect(respuesta).toEqual(true);
      });
  
      const request = facturaServiceMock.expectOne(
        `${environment.endpoint}/factura`
      );
      expect(request.request.method).toBe("POST");
      request.event(new HttpResponse<boolean>({ body: true }));
    });
  
    it("Debe consultar las facturas creadas", () => {
      let dummyFacturas: Factura[] = [
        new Factura(
            1,
        ),
      ];
      let cantidadMotocicletas = dummyFacturas.length;
  
      facturaService.consultar().subscribe((libros) => {
        expect(libros.length).toBe(cantidadMotocicletas);
        expect(libros).toEqual(dummyFacturas);
      });
  
      const request = facturaServiceMock.expectOne(
        `${environment.endpoint}/factura`
      );
      expect(request.request.method).toBe("GET");
      request.flush(dummyFacturas);
    });
  });
  