window.BENCHMARK_DATA = {
  "lastUpdate": 1676650043297,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "2af42880f91a73efa75d1ff89a809d3bdeabfd80",
          "message": "test(backend): add test for ops.Between",
          "timestamp": "2023-02-17T10:58:56-05:00",
          "tree_id": "f7b9ae0fb377b8f695cefba93fd83f6adc87eb87",
          "url": "https://github.com/ibis-project/ibis/commit/2af42880f91a73efa75d1ff89a809d3bdeabfd80"
        },
        "date": 1676649950026,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 305.52246867549775,
            "unit": "iter/sec",
            "range": "stddev: 0.0005178694894132178",
            "extra": "mean: 3.273081696201278 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 66.7183576779825,
            "unit": "iter/sec",
            "range": "stddev: 0.0010729885263068277",
            "extra": "mean: 14.988378533334412 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 164.5708819992535,
            "unit": "iter/sec",
            "range": "stddev: 0.0005556487123009824",
            "extra": "mean: 6.0764090697681015 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 10.055602015602723,
            "unit": "iter/sec",
            "range": "stddev: 0.0009396724495702224",
            "extra": "mean: 99.44705433333132 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 68.44284190194846,
            "unit": "iter/sec",
            "range": "stddev: 0.000983347255229992",
            "extra": "mean: 14.610731702704642 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2953.6459398483266,
            "unit": "iter/sec",
            "range": "stddev: 0.0001774981599402495",
            "extra": "mean: 338.56461484051516 usec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.358121525120959,
            "unit": "iter/sec",
            "range": "stddev: 0.03685719787520652",
            "extra": "mean: 736.311133800001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 175.49386043151546,
            "unit": "iter/sec",
            "range": "stddev: 0.0008770115265033789",
            "extra": "mean: 5.698205040000468 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 170.61855945455403,
            "unit": "iter/sec",
            "range": "stddev: 0.0005789233582783134",
            "extra": "mean: 5.861027095744294 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3240.1918388512277,
            "unit": "iter/sec",
            "range": "stddev: 0.00012279915156638194",
            "extra": "mean: 308.62370184678275 usec\nrounds: 2653"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 173.8297113621027,
            "unit": "iter/sec",
            "range": "stddev: 0.0006946834916451248",
            "extra": "mean: 5.75275648888878 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1224755.1000909607,
            "unit": "iter/sec",
            "range": "stddev: 0.000006821453271812102",
            "extra": "mean: 816.4897618517625 nsec\nrounds: 97088"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.032215447295734,
            "unit": "iter/sec",
            "range": "stddev: 0.005619201144652654",
            "extra": "mean: 55.45630279999614 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 391.24723810503843,
            "unit": "iter/sec",
            "range": "stddev: 0.0002645165921869311",
            "extra": "mean: 2.555928585830756 msec\nrounds: 367"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 106.61943882970338,
            "unit": "iter/sec",
            "range": "stddev: 0.0005571136749417113",
            "extra": "mean: 9.379152722771671 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5389536695360412,
            "unit": "iter/sec",
            "range": "stddev: 0.031875565445917756",
            "extra": "mean: 1.8554470570000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 213.60168143534236,
            "unit": "iter/sec",
            "range": "stddev: 0.0003637863698283716",
            "extra": "mean: 4.681611086955334 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 114.56931181715508,
            "unit": "iter/sec",
            "range": "stddev: 0.0012685683939551707",
            "extra": "mean: 8.728340810809204 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 118.21961780998663,
            "unit": "iter/sec",
            "range": "stddev: 0.0011147883010664697",
            "extra": "mean: 8.458832962962978 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 96713.9791400029,
            "unit": "iter/sec",
            "range": "stddev: 0.000019104801935523435",
            "extra": "mean: 10.339766897114249 usec\nrounds: 25907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 115.44909555821754,
            "unit": "iter/sec",
            "range": "stddev: 0.001174907016761941",
            "extra": "mean: 8.661826194175163 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.110617965257184,
            "unit": "iter/sec",
            "range": "stddev: 0.0007167543296180307",
            "extra": "mean: 18.480661238096932 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4142105.0813714815,
            "unit": "iter/sec",
            "range": "stddev: 4.7279395947089627e-7",
            "extra": "mean: 241.4231363895938 nsec\nrounds: 2822"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 61.95228750671352,
            "unit": "iter/sec",
            "range": "stddev: 0.0015540690372283328",
            "extra": "mean: 16.141454016393407 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3087.7552216418135,
            "unit": "iter/sec",
            "range": "stddev: 0.0001212156592303456",
            "extra": "mean: 323.85986848668745 usec\nrounds: 1612"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 29.444370170435732,
            "unit": "iter/sec",
            "range": "stddev: 0.0025568970470140093",
            "extra": "mean: 33.96234982142943 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 305422.9042274697,
            "unit": "iter/sec",
            "range": "stddev: 0.000006461271361043861",
            "extra": "mean: 3.2741486841970118 usec\nrounds: 1520"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 193.6839190366031,
            "unit": "iter/sec",
            "range": "stddev: 0.0005105680031422469",
            "extra": "mean: 5.163051248519069 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 63.89323369750036,
            "unit": "iter/sec",
            "range": "stddev: 0.0012385376570671202",
            "extra": "mean: 15.651109548382777 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 118.95109328539527,
            "unit": "iter/sec",
            "range": "stddev: 0.0006636903516739558",
            "extra": "mean: 8.406816384618967 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3548.927662019406,
            "unit": "iter/sec",
            "range": "stddev: 0.0001428085316604641",
            "extra": "mean: 281.7752558616484 usec\nrounds: 1962"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3628.4230507416155,
            "unit": "iter/sec",
            "range": "stddev: 0.00012633773709101972",
            "extra": "mean: 275.60182096065375 usec\nrounds: 2061"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 103.36442537898986,
            "unit": "iter/sec",
            "range": "stddev: 0.0006978960185547485",
            "extra": "mean: 9.674508384615494 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 66.71914768659946,
            "unit": "iter/sec",
            "range": "stddev: 0.001622758577541777",
            "extra": "mean: 14.98820105882213 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.4537265373296915,
            "unit": "iter/sec",
            "range": "stddev: 0.001376770856268338",
            "extra": "mean: 154.9492365714278 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 56.32583668532308,
            "unit": "iter/sec",
            "range": "stddev: 0.0015314501778622327",
            "extra": "mean: 17.7538419107154 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 25.671776084319667,
            "unit": "iter/sec",
            "range": "stddev: 0.004540435598184301",
            "extra": "mean: 38.95328460000087 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3408874.2462080484,
            "unit": "iter/sec",
            "range": "stddev: 6.768905210260038e-7",
            "extra": "mean: 293.3519771559751 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1238572.5328731127,
            "unit": "iter/sec",
            "range": "stddev: 0.000005003777879675213",
            "extra": "mean: 807.381056384565 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2809.716984552012,
            "unit": "iter/sec",
            "range": "stddev: 0.0001236553142518971",
            "extra": "mean: 355.9077321659293 usec\nrounds: 1542"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 114.29630872705172,
            "unit": "iter/sec",
            "range": "stddev: 0.0006827872162309786",
            "extra": "mean: 8.749188938271628 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6652.694578978059,
            "unit": "iter/sec",
            "range": "stddev: 0.00005818984150980227",
            "extra": "mean: 150.31503222166754 usec\nrounds: 2669"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 61.286618584369286,
            "unit": "iter/sec",
            "range": "stddev: 0.001382289527162559",
            "extra": "mean: 16.316775555554027 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 487343.65655361745,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056646449399786394",
            "extra": "mean: 2.0519401177226166 usec\nrounds: 17668"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.003180580821309,
            "unit": "iter/sec",
            "range": "stddev: 0.019336474918075428",
            "extra": "mean: 996.8295032000071 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 176.90596810934312,
            "unit": "iter/sec",
            "range": "stddev: 0.0005507959564512164",
            "extra": "mean: 5.652720542372624 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.46742806439775697,
            "unit": "iter/sec",
            "range": "stddev: 0.04229860126783387",
            "extra": "mean: 2.1393666238000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 92.06544523058322,
            "unit": "iter/sec",
            "range": "stddev: 0.0006760238195397961",
            "extra": "mean: 10.861838526880984 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1207775.519218456,
            "unit": "iter/sec",
            "range": "stddev: 0.00000839325197176593",
            "extra": "mean: 827.9684296359094 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 28.578654325179603,
            "unit": "iter/sec",
            "range": "stddev: 0.0014518168872231455",
            "extra": "mean: 34.99115068965779 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 83.16471386999069,
            "unit": "iter/sec",
            "range": "stddev: 0.000829503132257982",
            "extra": "mean: 12.024330433737497 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.59554612756616,
            "unit": "iter/sec",
            "range": "stddev: 0.002049042337513785",
            "extra": "mean: 24.041035473682147 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.5322417003467437,
            "unit": "iter/sec",
            "range": "stddev: 0.009137765829309889",
            "extra": "mean: 283.1063344000029 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3572027.5851309826,
            "unit": "iter/sec",
            "range": "stddev: 6.42365169955801e-7",
            "extra": "mean: 279.9530452007429 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 59.66736794828532,
            "unit": "iter/sec",
            "range": "stddev: 0.0029800049538388916",
            "extra": "mean: 16.75957955555734 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 714.5093734504485,
            "unit": "iter/sec",
            "range": "stddev: 0.0005118026821900696",
            "extra": "mean: 1.3995617652584238 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 169.49820906207748,
            "unit": "iter/sec",
            "range": "stddev: 0.0009833276904691408",
            "extra": "mean: 5.89976735172321 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 175.6540717165063,
            "unit": "iter/sec",
            "range": "stddev: 0.000630702712010351",
            "extra": "mean: 5.693007797814854 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3461.3765199827726,
            "unit": "iter/sec",
            "range": "stddev: 0.00013583322187449076",
            "extra": "mean: 288.9024046436234 usec\nrounds: 2412"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 46803.42763880638,
            "unit": "iter/sec",
            "range": "stddev: 0.000018467539407723916",
            "extra": "mean: 21.365956521758346 usec\nrounds: 7337"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 64.48336745138297,
            "unit": "iter/sec",
            "range": "stddev: 0.0012633907514785193",
            "extra": "mean: 15.507874968749835 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.760362708466225,
            "unit": "iter/sec",
            "range": "stddev: 0.002234637673508892",
            "extra": "mean: 20.50846106250089 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5129936339659967,
            "unit": "iter/sec",
            "range": "stddev: 0.09724182173381031",
            "extra": "mean: 1.9493419290000076 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8740143.753824739,
            "unit": "iter/sec",
            "range": "stddev: 2.0672270034147423e-7",
            "extra": "mean: 114.41459410350593 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 76.37507887794968,
            "unit": "iter/sec",
            "range": "stddev: 0.0006678888346734108",
            "extra": "mean: 13.093276166667382 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.41230678876007426,
            "unit": "iter/sec",
            "range": "stddev: 0.0807037012219867",
            "extra": "mean: 2.4253784493999944 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1115.9082999393336,
            "unit": "iter/sec",
            "range": "stddev: 0.00018127404082887325",
            "extra": "mean: 896.1309814205747 usec\nrounds: 915"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 102.63817718254661,
            "unit": "iter/sec",
            "range": "stddev: 0.001483910720398263",
            "extra": "mean: 9.742963363636662 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12515.303378508765,
            "unit": "iter/sec",
            "range": "stddev: 0.00005902194601877782",
            "extra": "mean: 79.90217813794241 usec\nrounds: 6102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 147.3205960308552,
            "unit": "iter/sec",
            "range": "stddev: 0.0011160638416665837",
            "extra": "mean: 6.787917147650947 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 213.8281085375389,
            "unit": "iter/sec",
            "range": "stddev: 0.0004993975378804249",
            "extra": "mean: 4.676653630055581 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.183345506298274,
            "unit": "iter/sec",
            "range": "stddev: 0.0016763763372567924",
            "extra": "mean: 34.26611934482229 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3535.456825701413,
            "unit": "iter/sec",
            "range": "stddev: 0.00011300456185585233",
            "extra": "mean: 282.84887902756554 usec\nrounds: 1893"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8110.976013565456,
            "unit": "iter/sec",
            "range": "stddev: 0.000040477450256826146",
            "extra": "mean: 123.28972472949232 usec\nrounds: 4254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 84.60602316154845,
            "unit": "iter/sec",
            "range": "stddev: 0.020203314453989325",
            "extra": "mean: 11.819489471696121 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7618.467262744487,
            "unit": "iter/sec",
            "range": "stddev: 0.00009410113070501986",
            "extra": "mean: 131.25999830571678 usec\nrounds: 4720"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 465.7267608289163,
            "unit": "iter/sec",
            "range": "stddev: 0.00047081807926676553",
            "extra": "mean: 2.147181747126074 msec\nrounds: 435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 114.18238370729155,
            "unit": "iter/sec",
            "range": "stddev: 0.0011618785889897648",
            "extra": "mean: 8.757918406779078 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 48.34112084268526,
            "unit": "iter/sec",
            "range": "stddev: 0.0008490633005934028",
            "extra": "mean: 20.686322173916146 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1677024.1892615391,
            "unit": "iter/sec",
            "range": "stddev: 8.280507227570008e-7",
            "extra": "mean: 596.2943208590316 nsec\nrounds: 80646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08436041598055183,
            "unit": "iter/sec",
            "range": "stddev: 0.06681228236822129",
            "extra": "mean: 11.853900770600001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 112.93825223524398,
            "unit": "iter/sec",
            "range": "stddev: 0.0014603944389184828",
            "extra": "mean: 8.854395921738337 msec\nrounds: 115"
          }
        ]
      }
    ]
  }
}