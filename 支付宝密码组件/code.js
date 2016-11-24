


$.fn.code = function(options) {
	// 默认参数
	var defaults = {
		number: 6
	}

	// 拓展参数
	$.extend(defaults, options);

	var str = '';
	for(var i = 0; i < defaults.number; i++) {
		str += '<input type="text" pattern="[0-9]*" maxlength="1" size="1" class="code-item">' 
	}

	this.append(str);

	this.on('keydown', 'input', function(event) {
		var $this = $(this);
		if(event.key.toLowerCase() == 'backspace') {
			if($this.next().length == 0) {
				if($this.val()) {
					console.log($this.next());
					event.preventDefault();
					$this.val('');
				} else {
					$this.prev().focus();
				}
			} else {
				$this.prev().focus();
			}
		}
	})

	this.on('keyup', 'input', function(event) {
		if(event.key.match(/^[0-9a-z]$/i)){
			$this.next().focus()			
		}
	})

}


$('.code-container').code();