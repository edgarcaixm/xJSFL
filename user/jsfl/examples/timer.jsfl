// -----------------------------------------------------------------------------------------------------------------------------------------
// Test code

	// initialize
		xjsfl.init(this);
		clear();
		try
		{
	
	// Helper methods
	
		function test()
		{
			var arr = [];
			for(var i = 0; i < 500000; i++)
			{
				var sin = Math.sin(i);
				arr.push(sin)
			}
		}
		
		function report(timer)
		{
			fl.trace('timer			' + timer);
			fl.trace('time:			' + timer.time);
			fl.trace('milliseconds:	' + timer.milliseconds);
			fl.trace('startDate:	' + timer.startDate);
			fl.trace('endDate:		' + timer.endDate);
			fl.trace('\n');
		}
		
	// --------------------------------------------------------------------------------
	// Instance timer - intantiate multiple timers
	
		if(1)
		{
			var timer = new Timer('Instance').start();
			test();
			timer.stop(true);
			report(timer)
			
			timer.start();
			test();
			timer.stop(true);
			report(timer)
		}
	
	// --------------------------------------------------------------------------------
	// Static timer - call methods directly on the single class instance
	
		if(1)
		{
			Timer.start('Static');
			test();
			Timer.stop(true);
			report(Timer.instance)
			
			Timer.start();
			test();
			Timer.stop(true);
			report(Timer.instance)
		}
	

	// catch
		}catch(err){xjsfl.output.debug(err);}
