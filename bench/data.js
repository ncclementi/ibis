window.BENCHMARK_DATA = {
  "lastUpdate": 1675947465445,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "8904d3da5ae17f7a0b005720f56aa855f3b5f8f0",
          "message": "ci(snowflake): add pyarrow job",
          "timestamp": "2023-02-09T07:52:44-05:00",
          "tree_id": "f1f05976972edabf27ddec24b9b8f72b911202bf",
          "url": "https://github.com/ibis-project/ibis/commit/8904d3da5ae17f7a0b005720f56aa855f3b5f8f0"
        },
        "date": 1675947391191,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.51230098527923,
            "unit": "iter/sec",
            "range": "stddev: 0.0006466008411298381",
            "extra": "mean: 15.50091974285936 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 220.9289166182119,
            "unit": "iter/sec",
            "range": "stddev: 0.00021681685458829766",
            "extra": "mean: 4.526342749999103 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5062.495066181457,
            "unit": "iter/sec",
            "range": "stddev: 0.00005882569418464492",
            "extra": "mean: 197.53105670763264 usec\nrounds: 723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.61673303795496,
            "unit": "iter/sec",
            "range": "stddev: 0.00008881452691405086",
            "extra": "mean: 10.038474154929274 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 606575.3637772223,
            "unit": "iter/sec",
            "range": "stddev: 4.365659456498305e-7",
            "extra": "mean: 1.6485997614094843 usec\nrounds: 21787"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 117.26904640132732,
            "unit": "iter/sec",
            "range": "stddev: 0.0003599529765965394",
            "extra": "mean: 8.527399434781124 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 93.57050511047842,
            "unit": "iter/sec",
            "range": "stddev: 0.0005206303460734364",
            "extra": "mean: 10.687128372549694 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 86.67555458439645,
            "unit": "iter/sec",
            "range": "stddev: 0.0099357233183229",
            "extra": "mean: 11.537278357143878 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 90.27070695549027,
            "unit": "iter/sec",
            "range": "stddev: 0.00045258439708932764",
            "extra": "mean: 11.077790722222543 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 139.47210920019654,
            "unit": "iter/sec",
            "range": "stddev: 0.00922670583607042",
            "extra": "mean: 7.169892286956185 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.47955122979479,
            "unit": "iter/sec",
            "range": "stddev: 0.0006598694953775699",
            "extra": "mean: 29.002697666664258 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 252.87362695678218,
            "unit": "iter/sec",
            "range": "stddev: 0.0002314181448264527",
            "extra": "mean: 3.9545444577773496 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2481710137359983,
            "unit": "iter/sec",
            "range": "stddev: 0.0037354274137753034",
            "extra": "mean: 444.80601959999717 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9659.17875615098,
            "unit": "iter/sec",
            "range": "stddev: 0.000014699601425748097",
            "extra": "mean: 103.52847019869041 usec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.712314554731535,
            "unit": "iter/sec",
            "range": "stddev: 0.0008730315948643168",
            "extra": "mean: 22.36520318750035 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4670.972956483269,
            "unit": "iter/sec",
            "range": "stddev: 0.000051811852300381525",
            "extra": "mean: 214.08815878756243 usec\nrounds: 1650"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5435.408920464098,
            "unit": "iter/sec",
            "range": "stddev: 0.00004939769317312428",
            "extra": "mean: 183.9787980321112 usec\nrounds: 3659"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4326353.5499439435,
            "unit": "iter/sec",
            "range": "stddev: 1.2590431205747242e-8",
            "extra": "mean: 231.14153488747044 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 156.23632771179064,
            "unit": "iter/sec",
            "range": "stddev: 0.0006178171527187035",
            "extra": "mean: 6.400560065932305 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.8950115432858,
            "unit": "iter/sec",
            "range": "stddev: 0.0005792806768547294",
            "extra": "mean: 12.06345208695488 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19470.53286515424,
            "unit": "iter/sec",
            "range": "stddev: 0.000013802330960816362",
            "extra": "mean: 51.35966267208158 usec\nrounds: 6676"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1481070.8294814317,
            "unit": "iter/sec",
            "range": "stddev: 8.899755470709324e-8",
            "extra": "mean: 675.1871551950899 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 154.41131232279625,
            "unit": "iter/sec",
            "range": "stddev: 0.0006718899678735017",
            "extra": "mean: 6.476209449664568 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 251.88235660778375,
            "unit": "iter/sec",
            "range": "stddev: 0.00021157064363226032",
            "extra": "mean: 3.9701073686440873 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1335775937843965,
            "unit": "iter/sec",
            "range": "stddev: 0.11937039456878286",
            "extra": "mean: 7.486285473999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 231.9361420279248,
            "unit": "iter/sec",
            "range": "stddev: 0.006753238238778267",
            "extra": "mean: 4.311531576133578 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.22195625924401,
            "unit": "iter/sec",
            "range": "stddev: 0.0007411712358598404",
            "extra": "mean: 10.613237505370636 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 59196.59185248187,
            "unit": "iter/sec",
            "range": "stddev: 4.4359826079645557e-7",
            "extra": "mean: 16.892864415100174 usec\nrounds: 13947"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8731009824007212,
            "unit": "iter/sec",
            "range": "stddev: 0.003846749106441745",
            "extra": "mean: 1.1453428872000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 139.20938302224883,
            "unit": "iter/sec",
            "range": "stddev: 0.00010410309499585263",
            "extra": "mean: 7.183423834585756 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.259864876385635,
            "unit": "iter/sec",
            "range": "stddev: 0.0002349856226899572",
            "extra": "mean: 17.164475099998526 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 496.1881895158617,
            "unit": "iter/sec",
            "range": "stddev: 0.00010108872599904513",
            "extra": "mean: 2.015364374101115 msec\nrounds: 417"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.247598467621625,
            "unit": "iter/sec",
            "range": "stddev: 0.001760886707473916",
            "extra": "mean: 75.48537966666895 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.46977411936939,
            "unit": "iter/sec",
            "range": "stddev: 0.00008725516419903983",
            "extra": "mean: 9.855151533338358 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5422462.058304295,
            "unit": "iter/sec",
            "range": "stddev: 4.491654744137353e-9",
            "extra": "mean: 184.41807231614345 nsec\nrounds: 53764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11010466.889978716,
            "unit": "iter/sec",
            "range": "stddev: 3.0941131224933904e-9",
            "extra": "mean: 90.82266991887242 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5236.277545037536,
            "unit": "iter/sec",
            "range": "stddev: 0.000072279675646804",
            "extra": "mean: 190.97536205805372 usec\nrounds: 1729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.69469647467102,
            "unit": "iter/sec",
            "range": "stddev: 0.00020959086746282182",
            "extra": "mean: 11.148931199988965 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 66.41291120323899,
            "unit": "iter/sec",
            "range": "stddev: 0.00007124562907984785",
            "extra": "mean: 15.057313132077086 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5432.356060986993,
            "unit": "iter/sec",
            "range": "stddev: 0.000047251584241501687",
            "extra": "mean: 184.08218989576176 usec\nrounds: 2296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 152.81150364049745,
            "unit": "iter/sec",
            "range": "stddev: 0.0007268995181110627",
            "extra": "mean: 6.544009948050693 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.66158057731664,
            "unit": "iter/sec",
            "range": "stddev: 0.00003870380475088205",
            "extra": "mean: 5.859549622224196 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 267.05785385207514,
            "unit": "iter/sec",
            "range": "stddev: 0.00012312855104472",
            "extra": "mean: 3.744506988189554 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.859776154900609,
            "unit": "iter/sec",
            "range": "stddev: 0.001746400822935069",
            "extra": "mean: 205.77079439998442 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 141.62396551218984,
            "unit": "iter/sec",
            "range": "stddev: 0.00009079303481259276",
            "extra": "mean: 7.060951840908085 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4677.175801510484,
            "unit": "iter/sec",
            "range": "stddev: 0.000050579474791008055",
            "extra": "mean: 213.8042362395384 usec\nrounds: 2053"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2102486.8091448178,
            "unit": "iter/sec",
            "range": "stddev: 3.461442868134778e-8",
            "extra": "mean: 475.62724087064345 nsec\nrounds: 104156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 151.32273944110148,
            "unit": "iter/sec",
            "range": "stddev: 0.00004943230318989474",
            "extra": "mean: 6.608392127273274 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.74073682295831,
            "unit": "iter/sec",
            "range": "stddev: 0.00047496560733323323",
            "extra": "mean: 11.397214523258247 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2144098.332110265,
            "unit": "iter/sec",
            "range": "stddev: 1.478620641910365e-8",
            "extra": "mean: 466.39651970429634 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.675253554627982,
            "unit": "iter/sec",
            "range": "stddev: 0.0261593064274741",
            "extra": "mean: 31.570386588235937 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 89.2643914010117,
            "unit": "iter/sec",
            "range": "stddev: 0.000667606604096577",
            "extra": "mean: 11.202675381581846 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 240.2661221103134,
            "unit": "iter/sec",
            "range": "stddev: 0.00020353366923532622",
            "extra": "mean: 4.162051608511291 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 962.8223807451302,
            "unit": "iter/sec",
            "range": "stddev: 0.000012772266640242523",
            "extra": "mean: 1.038613164793799 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10724.644544760191,
            "unit": "iter/sec",
            "range": "stddev: 0.000002086846363596066",
            "extra": "mean: 93.2431835690607 usec\nrounds: 4881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4714455.61319803,
            "unit": "iter/sec",
            "range": "stddev: 4.62379407200303e-9",
            "extra": "mean: 212.113567725675 nsec\nrounds: 49020"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 244.89921934312787,
            "unit": "iter/sec",
            "range": "stddev: 0.00011652063705554467",
            "extra": "mean: 4.08331232203277 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 156.59870285674737,
            "unit": "iter/sec",
            "range": "stddev: 0.0006274407073612282",
            "extra": "mean: 6.385748935064777 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1652528.514480976,
            "unit": "iter/sec",
            "range": "stddev: 9.547263164952956e-8",
            "extra": "mean: 605.133279841818 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5629280152375619,
            "unit": "iter/sec",
            "range": "stddev: 0.08601556941182482",
            "extra": "mean: 1.7764260668000134 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 134.1455972873901,
            "unit": "iter/sec",
            "range": "stddev: 0.0008069435299103402",
            "extra": "mean: 7.454586808821058 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 401096.9646091137,
            "unit": "iter/sec",
            "range": "stddev: 1.4729635199381383e-7",
            "extra": "mean: 2.493162721823495 usec\nrounds: 2028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 411.0309009578217,
            "unit": "iter/sec",
            "range": "stddev: 0.00002368479065813142",
            "extra": "mean: 2.432907106666941 msec\nrounds: 375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 249.50770400203402,
            "unit": "iter/sec",
            "range": "stddev: 0.0001927341491103955",
            "extra": "mean: 4.0078922773136005 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 262.84921284414906,
            "unit": "iter/sec",
            "range": "stddev: 0.000011606853604105235",
            "extra": "mean: 3.8044626011222986 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8696667572619514,
            "unit": "iter/sec",
            "range": "stddev: 0.005103715547850222",
            "extra": "mean: 1.1498657291999848 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 599.0817106686569,
            "unit": "iter/sec",
            "range": "stddev: 0.00008222000060961591",
            "extra": "mean: 1.6692213803086453 msec\nrounds: 518"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4297.843241845099,
            "unit": "iter/sec",
            "range": "stddev: 0.00005921067127698894",
            "extra": "mean: 232.67484264286284 usec\nrounds: 2059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10709.255714837369,
            "unit": "iter/sec",
            "range": "stddev: 0.00000154159009809282",
            "extra": "mean: 93.37717079764268 usec\nrounds: 4801"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 124062.74749180944,
            "unit": "iter/sec",
            "range": "stddev: 3.19547285635541e-7",
            "extra": "mean: 8.06043732076802 usec\nrounds: 33113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5952841740718824,
            "unit": "iter/sec",
            "range": "stddev: 0.001368871020553636",
            "extra": "mean: 626.8475650000028 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1466.1072560386706,
            "unit": "iter/sec",
            "range": "stddev: 0.000022438493067699406",
            "extra": "mean: 682.0783376394555 usec\nrounds: 1161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.734478550690916,
            "unit": "iter/sec",
            "range": "stddev: 0.00021533064702388568",
            "extra": "mean: 23.96100382050766 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.142773008448428,
            "unit": "iter/sec",
            "range": "stddev: 0.00022411258818283842",
            "extra": "mean: 109.37600649999126 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 120.55611713523722,
            "unit": "iter/sec",
            "range": "stddev: 0.013559130811738717",
            "extra": "mean: 8.294892235772839 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.25675593715162,
            "unit": "iter/sec",
            "range": "stddev: 0.0003019694772317957",
            "extra": "mean: 38.08543608333063 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.30549414175596,
            "unit": "iter/sec",
            "range": "stddev: 0.00008006839955365853",
            "extra": "mean: 14.640110763633112 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 273.2107831697521,
            "unit": "iter/sec",
            "range": "stddev: 0.00005317472424250328",
            "extra": "mean: 3.660177641592854 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7465116751243613,
            "unit": "iter/sec",
            "range": "stddev: 0.0072370292910657495",
            "extra": "mean: 1.3395637781999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 252.07122183193366,
            "unit": "iter/sec",
            "range": "stddev: 0.00017964212339305848",
            "extra": "mean: 3.967132752134401 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4107.810027020076,
            "unit": "iter/sec",
            "range": "stddev: 0.000020618878360426173",
            "extra": "mean: 243.43871635306098 usec\nrounds: 2073"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 91.75736906599441,
            "unit": "iter/sec",
            "range": "stddev: 0.0006214540027299655",
            "extra": "mean: 10.898307244192807 msec\nrounds: 86"
          }
        ]
      }
    ]
  }
}