import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { delay, filter, take, takeUntil } from 'rxjs/operators';

import { FuseConfigService } from 'projects/deck/src/@fuse/services/config.service';

@Component({
    selector   : 'footer',
    templateUrl: './footer.component.html',
    styleUrls  : ['./footer.component.scss']
})
export class FooterComponent implements OnDestroy, OnInit
{
    version = '1.0.0';
    applicationConfig: any;

    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     */
    constructor(
      private _fuseConfigService: FuseConfigService,
    )
    {
      // Set the private defaults
      this._unsubscribeAll = new Subject();
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to the config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.applicationConfig = config.application;

                this.version = this.applicationConfig.version;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
