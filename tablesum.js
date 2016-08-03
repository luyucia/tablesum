;(function($) {
    $.fn.extend({
        tableSum: function(opt) {

            var defaults = {
                'sumText':'合计'
            }
            var opts = $.extend({}, defaults, opt)

            var sum = []
            var pat = new RegExp("^\\d*\\.\\d*$|^\\d+$");
            this.find('tbody tr').each(function(i, el) {
                    $(el).find('td').each(function(j, el) {
                        if (i == 0) {
                            sum[j] = 0;
                        }
                        if (pat.test(el.innerHTML)) {
                            v = parseFloat(el.innerHTML)
                            sum[j] += v;
                        }else{
                            sum[j] = '';
                        }

                    })
                })
            if (sum[0] == 0) {
                sum[0] = opts.sumText;
            }
            sum_html = '<tr>'
            for (var i = 0; i < sum.length; i++) {
                sum_html += '<td>' + sum[i] + '</td>';
            }
            sum_html += '</tr>';
            this.find('tbody').append(sum_html)
        }
    })
})(jQuery)
