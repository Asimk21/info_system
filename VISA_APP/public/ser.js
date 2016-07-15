$(document).ready(function() {
    var table =  $('#myTable').DataTable({
                    'scrollX': true,
                    'scrollY': 500,
                    'paging':   true,
                    "ordering": false,
                    'info' : false,
                    'aaSorting': []

    });

    $('#search').click(function(e){
        e.preventDefault();
        var dataval = $("#search1").val();
        $.get('/URL_OF_INTEREST', {"MID":dataval}, function(data){                
                    table.clear();
                    let arr = data.length;
                    for(var j=0;j<=arr-1;j++)
                    { 
                                
                        table.row.add($("<tr class='info'>"+"<td>"+data[j].Type+"</td>"+"<td>"+data[j].ValidFrom+"</td>"+"<td>"+data[j].ValidUntil+"</td>"+"<td>"+data[j].Cos+"</td>"+"<td>"+data[j].PlaceOfIssue+"</td>"+"<td>"+data[j].DateOfIssue+"</td><tr>")).draw();
                            
                     }
                    $('#search').keyup(function(){
                        table.search($(this).val()).draw();
                    })
        });
    });

    var obj = {"M900099": {
        "FirstName": "Vikram",
        "LastName": "Khurana",
        "Sex": "MALE",
        "passport": {
            "ID": "K111111",
            "DOB": "16/06/1991",
            "validity": [
                {
                    "ValidFrom": "01/01/2012",
                    "ValidUntil": "01/01/2019",
                    "Address": "110, xxx xx, M10 222",
                    "PlaceOfIssue": "Nagpur",
                    "Visa": [
                        {
                            "Type": "T2 ICT SHORT TERM WORK PERMIT",
                            "ValidFrom": "01/01/2016",
                            "ValidUntil": "01/01/2017",
                            "Cos": "CosK111111",
                            "PlaceOfIssue": "Nagpur",
                            "DateOfIssue": "31/12/2015"
                        }
                    ]
                },
                                {
                    "ValidFrom": "01/01/2012",
                    "ValidUntil": "01/01/2019",
                    "Address": "110, xxx xx, M10 222",
                    "PlaceOfIssue": "Nagpur",
                    "Visa": [
                        {
                            "Type": "T2 ICT SHORT TERM WORK PERMIT",
                            "ValidFrom": "01/01/2016",
                            "ValidUntil": "01/01/2017",
                            "Cos": "CosK111111",
                            "PlaceOfIssue": "Nagpur",
                            "DateOfIssue": "31/12/2015"
                        },
                        {
                            "Type": "T2 ICT SHORT TERM WORK PERMIT",
                            "ValidFrom": "01/01/2016",
                            "ValidUntil": "01/01/2017",
                            "Cos": "CosK111111",
                            "PlaceOfIssue": "Nagpur",
                            "DateOfIssue": "31/12/2015"
                        }
                    ]
                }
            ]
        }
    }};

    $('#json').click(function(e){
        e.preventDefault();
        $.post('/save_details', obj, function(data){                
            alert(data);
        });
    });

})