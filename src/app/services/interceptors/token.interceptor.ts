import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpSentEvent } from "@angular/common/http";
import { HttpHeaderResponse } from "@angular/common/http";
import { HttpProgressEvent } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { HttpUserEvent } from "@angular/common/http";
import { TokenService } from "../auth/token.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(this.tokenService.hasToken()){
            const token = this.tokenService.getToken()
            console.log('interceptor ', token)
            req = req.clone({ headers: req.headers.append('x-api-key', token) });
        }
        
        return next.handle(req);
    }
}