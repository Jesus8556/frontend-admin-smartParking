import { inject } from "@angular/core"
import { Router } from "@angular/router"

export const loginGuard = () => {

    const router = inject(Router)
    

    return false
}