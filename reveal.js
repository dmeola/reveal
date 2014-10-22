(function () {
	var children = document.body.childNodes,
	commentID = 0,
	newHTML = '';
	comments = [];

	//loop through DOM elements

	function searchChildren(children) {
		for (var i=0, len=children.length; i<len; i++) {
			if (children[i].childNodes.length > 0) {
				searchChildren(children[i].childNodes);
			}

			//if Comment Node found
			if (children[i].nodeType == Node.COMMENT_NODE) {
				comments.push(children[i]); 											// add node to array
				var $child = $(children[i]).next();										// assign appropriate node
				$child.attr('comment-id', commentID);									// store ID

				$child.on('mouseover', function(event) {
					event.stopPropagation();											// let the child win
					$(this).addClass("hover");											// highlight the appropriate element
					$(this).before( '<div class="tooltip"></div>');						// create tooltip container
					$('.tooltip').css({"top": event.pageY, "left": event.pageX});		// place the tooltip
					newHTML = comments[$(this).attr('comment-id')].data;				// tooltip content
					$('.tooltip').html(newHTML);										// set tooltip content
				});

				//remove tooltip on mouseout
				
				$child.on('mouseout', function(event) {
					event.stopPropagation();											// better to focus on child than parent
					$(this).removeClass("hover");
					$('.tooltip').empty();
					$('.tooltip').remove();
				});

				commentID += 1;
			}
		}
	}

	searchChildren(children);
}());
