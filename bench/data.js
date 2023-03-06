window.BENCHMARK_DATA = {
  "lastUpdate": 1678136948812,
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
          "id": "73e1b12fd341cb37be2dd06713aaec0e9b68f610",
          "message": "test(backends): fix strict validate exception in test_temporal for cloud backends",
          "timestamp": "2023-03-06T16:02:14-05:00",
          "tree_id": "1075019ffd6012af4388336f647bf7b89324b8ed",
          "url": "https://github.com/ibis-project/ibis/commit/73e1b12fd341cb37be2dd06713aaec0e9b68f610"
        },
        "date": 1678136863729,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.27417803594061,
            "unit": "iter/sec",
            "range": "stddev: 0.0006469265769232838",
            "extra": "mean: 14.03032665625048 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71618.57256933641,
            "unit": "iter/sec",
            "range": "stddev: 4.6901597158258936e-7",
            "extra": "mean: 13.962858573198531 usec\nrounds: 11087"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.850238315678145,
            "unit": "iter/sec",
            "range": "stddev: 0.0031408294856090945",
            "extra": "mean: 1.1761408320000328 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5384.008996978242,
            "unit": "iter/sec",
            "range": "stddev: 0.00004600095113065443",
            "extra": "mean: 185.7352022556513 usec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140716.19963946773,
            "unit": "iter/sec",
            "range": "stddev: 4.5370724802058235e-7",
            "extra": "mean: 7.106502325689036 usec\nrounds: 36765"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 114.38364356982227,
            "unit": "iter/sec",
            "range": "stddev: 0.005493966923891864",
            "extra": "mean: 8.742508708332744 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.72764979402749,
            "unit": "iter/sec",
            "range": "stddev: 0.0005828593562906097",
            "extra": "mean: 9.369643217384521 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7785837598458238,
            "unit": "iter/sec",
            "range": "stddev: 0.0028182596558335928",
            "extra": "mean: 562.2450977999961 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7676.218563510614,
            "unit": "iter/sec",
            "range": "stddev: 0.000014964142825447373",
            "extra": "mean: 130.27247618424553 usec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 122.14071149705335,
            "unit": "iter/sec",
            "range": "stddev: 0.0005474274807210935",
            "extra": "mean: 8.187278326310757 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2447347.315798464,
            "unit": "iter/sec",
            "range": "stddev: 1.6529039407824458e-8",
            "extra": "mean: 408.60567421080003 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.86138039361248,
            "unit": "iter/sec",
            "range": "stddev: 0.0003009345237804906",
            "extra": "mean: 9.721821699974953 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 253.59911207898034,
            "unit": "iter/sec",
            "range": "stddev: 0.0038351022065623653",
            "extra": "mean: 3.943231471916835 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.64488844027329,
            "unit": "iter/sec",
            "range": "stddev: 0.00010025658758333656",
            "extra": "mean: 9.204298649998085 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 298.0937331324427,
            "unit": "iter/sec",
            "range": "stddev: 0.00004345083904024229",
            "extra": "mean: 3.3546495241337433 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.90644511259231,
            "unit": "iter/sec",
            "range": "stddev: 0.00003473817984956252",
            "extra": "mean: 10.110564573032912 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1742.3742674058838,
            "unit": "iter/sec",
            "range": "stddev: 0.000007720869161562239",
            "extra": "mean: 573.9295045311017 usec\nrounds: 331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5804.0639404050635,
            "unit": "iter/sec",
            "range": "stddev: 0.00004565232785935974",
            "extra": "mean: 172.29307090131925 usec\nrounds: 2299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2496528.6228680266,
            "unit": "iter/sec",
            "range": "stddev: 1.7578437856067726e-8",
            "extra": "mean: 400.5561926424602 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 691.7248218235148,
            "unit": "iter/sec",
            "range": "stddev: 0.000037678019263131645",
            "extra": "mean: 1.4456615816732075 msec\nrounds: 502"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 546.44544613125,
            "unit": "iter/sec",
            "range": "stddev: 0.000026899765967955243",
            "extra": "mean: 1.8300088454938122 msec\nrounds: 466"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 312.76128809414257,
            "unit": "iter/sec",
            "range": "stddev: 0.00018262136475079277",
            "extra": "mean: 3.197326645166506 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 307.91081175417696,
            "unit": "iter/sec",
            "range": "stddev: 0.0001828629765322895",
            "extra": "mean: 3.2476936886463017 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 35.803087367919446,
            "unit": "iter/sec",
            "range": "stddev: 0.0004506084229933305",
            "extra": "mean: 27.930552181821827 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.32708890802131,
            "unit": "iter/sec",
            "range": "stddev: 0.0005504152621371219",
            "extra": "mean: 9.678004195881007 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.26708364463578,
            "unit": "iter/sec",
            "range": "stddev: 0.000560251250909893",
            "extra": "mean: 9.499645714284574 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17917020418287052,
            "unit": "iter/sec",
            "range": "stddev: 0.10280475251687098",
            "extra": "mean: 5.581285150400049 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9196591782226388,
            "unit": "iter/sec",
            "range": "stddev: 0.005707791026620052",
            "extra": "mean: 1.087359343199978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11973.317809536049,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015945826779513534",
            "extra": "mean: 83.51903924270333 usec\nrounds: 5377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 115.61403609263948,
            "unit": "iter/sec",
            "range": "stddev: 0.000589383718885387",
            "extra": "mean: 8.649468817079596 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.30104084631165,
            "unit": "iter/sec",
            "range": "stddev: 0.00019387425722085564",
            "extra": "mean: 3.222676911661692 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6320107.1350261895,
            "unit": "iter/sec",
            "range": "stddev: 9.473830789249297e-9",
            "extra": "mean: 158.22516590820396 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.0727823859474,
            "unit": "iter/sec",
            "range": "stddev: 0.000011479667294114787",
            "extra": "mean: 1.3261319376041114 msec\nrounds: 609"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.855563030698224,
            "unit": "iter/sec",
            "range": "stddev: 0.000313437681393509",
            "extra": "mean: 35.899471818176856 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 182.42753625593778,
            "unit": "iter/sec",
            "range": "stddev: 0.004101415421211031",
            "extra": "mean: 5.4816285990786175 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.596147898309487,
            "unit": "iter/sec",
            "range": "stddev: 0.00035674151855851166",
            "extra": "mean: 178.69434800000286 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.67991180813365,
            "unit": "iter/sec",
            "range": "stddev: 0.00005722416892057959",
            "extra": "mean: 6.223553328770123 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.4813535823932,
            "unit": "iter/sec",
            "range": "stddev: 0.0005638362973976591",
            "extra": "mean: 9.757872676769612 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.73655108989779,
            "unit": "iter/sec",
            "range": "stddev: 0.0006012372553364949",
            "extra": "mean: 8.28249598794173 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7173229.857329235,
            "unit": "iter/sec",
            "range": "stddev: 8.557021767924861e-9",
            "extra": "mean: 139.4072154230918 nsec\nrounds: 73530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.9621213000102,
            "unit": "iter/sec",
            "range": "stddev: 0.00007137567954698872",
            "extra": "mean: 6.495104065573391 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.69809022994597,
            "unit": "iter/sec",
            "range": "stddev: 0.0005479204023436963",
            "extra": "mean: 20.965199972978727 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.29833629716822,
            "unit": "iter/sec",
            "range": "stddev: 0.0002967187469397999",
            "extra": "mean: 8.453204257141676 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5537.682815918241,
            "unit": "iter/sec",
            "range": "stddev: 0.00004755865788529839",
            "extra": "mean: 180.5809457207388 usec\nrounds: 2395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 356.9342982332678,
            "unit": "iter/sec",
            "range": "stddev: 0.00003170868098181207",
            "extra": "mean: 2.801636057251266 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.75172455115354,
            "unit": "iter/sec",
            "range": "stddev: 0.00012960109017776784",
            "extra": "mean: 20.099805765965435 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5761.5514403966135,
            "unit": "iter/sec",
            "range": "stddev: 0.00004684908611770048",
            "extra": "mean: 173.5643620203731 usec\nrounds: 2754"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.7032908536518,
            "unit": "iter/sec",
            "range": "stddev: 0.0007948003052295129",
            "extra": "mean: 26.52288374194115 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.99826873549654,
            "unit": "iter/sec",
            "range": "stddev: 0.00029573441663823994",
            "extra": "mean: 16.949649903851267 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 303.76342265748235,
            "unit": "iter/sec",
            "range": "stddev: 0.00018827498164861406",
            "extra": "mean: 3.2920355955021625 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5330.070166732762,
            "unit": "iter/sec",
            "range": "stddev: 0.000028503419711836048",
            "extra": "mean: 187.614790934916 usec\nrounds: 2559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.46173540343233,
            "unit": "iter/sec",
            "range": "stddev: 0.00006350491712404426",
            "extra": "mean: 6.155295568625774 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.41847369962227,
            "unit": "iter/sec",
            "range": "stddev: 0.0005956867383723882",
            "extra": "mean: 9.39686470999959 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 298.10636840225544,
            "unit": "iter/sec",
            "range": "stddev: 0.00021797686657075706",
            "extra": "mean: 3.3545073369604475 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6708127615167069,
            "unit": "iter/sec",
            "range": "stddev: 0.05873444723974526",
            "extra": "mean: 1.4907289445999823 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.8527998428588,
            "unit": "iter/sec",
            "range": "stddev: 0.00018047240091997958",
            "extra": "mean: 3.166031773337181 msec\nrounds: 300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5257.540754334389,
            "unit": "iter/sec",
            "range": "stddev: 0.000048061558938578905",
            "extra": "mean: 190.20299541674234 usec\nrounds: 3273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.70509437206897,
            "unit": "iter/sec",
            "range": "stddev: 0.00007455903221170596",
            "extra": "mean: 9.03300797196467 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.4076908301021,
            "unit": "iter/sec",
            "range": "stddev: 0.0002525508041840935",
            "extra": "mean: 3.5409800528470914 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5405.938139743866,
            "unit": "iter/sec",
            "range": "stddev: 0.00004795890100111614",
            "extra": "mean: 184.9817689640415 usec\nrounds: 2887"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 481698.768818738,
            "unit": "iter/sec",
            "range": "stddev: 1.9541519741519293e-7",
            "extra": "mean: 2.0759862070070962 usec\nrounds: 2030"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 740530.7384201828,
            "unit": "iter/sec",
            "range": "stddev: 1.3774694089150423e-7",
            "extra": "mean: 1.3503828377649225 usec\nrounds: 27398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1624784.9032925593,
            "unit": "iter/sec",
            "range": "stddev: 8.81813938015307e-8",
            "extra": "mean: 615.4660829095232 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9170778921886881,
            "unit": "iter/sec",
            "range": "stddev: 0.004687450659322441",
            "extra": "mean: 1.0904199179999978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 326.9956708511975,
            "unit": "iter/sec",
            "range": "stddev: 0.000022887004926234974",
            "extra": "mean: 3.058144462270449 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1152.6261109963716,
            "unit": "iter/sec",
            "range": "stddev: 0.000014426873775582769",
            "extra": "mean: 867.584024394141 usec\nrounds: 164"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.36578107055661,
            "unit": "iter/sec",
            "range": "stddev: 0.0005623644929339422",
            "extra": "mean: 8.239554767242382 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 69.59477101520001,
            "unit": "iter/sec",
            "range": "stddev: 0.0001238818265564397",
            "extra": "mean: 14.368895614033885 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5706.976510097142,
            "unit": "iter/sec",
            "range": "stddev: 0.00005354495892892409",
            "extra": "mean: 175.2241310667281 usec\nrounds: 2411"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5643543.202393476,
            "unit": "iter/sec",
            "range": "stddev: 1.1629375511768079e-8",
            "extra": "mean: 177.19364663921962 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5564.061522467331,
            "unit": "iter/sec",
            "range": "stddev: 0.00006609644634365439",
            "extra": "mean: 179.72482798079474 usec\nrounds: 2273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.484837061689163,
            "unit": "iter/sec",
            "range": "stddev: 0.00029548035219608283",
            "extra": "mean: 95.37582645455959 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.31625494469263,
            "unit": "iter/sec",
            "range": "stddev: 0.0005364111093361461",
            "extra": "mean: 9.318252864073278 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.70305501054187,
            "unit": "iter/sec",
            "range": "stddev: 0.00030840902843157214",
            "extra": "mean: 7.262003010197884 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 260.6644441685221,
            "unit": "iter/sec",
            "range": "stddev: 0.008220297163371595",
            "extra": "mean: 3.836349845065522 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.55738030229857,
            "unit": "iter/sec",
            "range": "stddev: 0.00011205253609020014",
            "extra": "mean: 64.27817412500048 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.33984313503777,
            "unit": "iter/sec",
            "range": "stddev: 0.0005827685215763418",
            "extra": "mean: 8.241316076922162 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11611.209605660617,
            "unit": "iter/sec",
            "range": "stddev: 0.000029792474146689097",
            "extra": "mean: 86.12367134535981 usec\nrounds: 5556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.56475563476627,
            "unit": "iter/sec",
            "range": "stddev: 0.0006017567592624912",
            "extra": "mean: 8.294297904350731 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13312.02725435068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075532526358207025",
            "extra": "mean: 75.1200385105264 usec\nrounds: 7063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.17371762058383,
            "unit": "iter/sec",
            "range": "stddev: 0.0002496391707415346",
            "extra": "mean: 10.507102433326864 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.00819078276692,
            "unit": "iter/sec",
            "range": "stddev: 0.00003073578208635204",
            "extra": "mean: 5.154421552849338 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2508266.4227331774,
            "unit": "iter/sec",
            "range": "stddev: 1.3884489634867307e-8",
            "extra": "mean: 398.68173130890557 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.483654505906847,
            "unit": "iter/sec",
            "range": "stddev: 0.0028937626340745514",
            "extra": "mean: 402.63249080003334 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 114.1652895662059,
            "unit": "iter/sec",
            "range": "stddev: 0.0005791412075567591",
            "extra": "mean: 8.75922974311809 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.15297664408911,
            "unit": "iter/sec",
            "range": "stddev: 0.000628351767634632",
            "extra": "mean: 10.735030012199331 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.14596661420373,
            "unit": "iter/sec",
            "range": "stddev: 0.00007694374700443159",
            "extra": "mean: 13.307434118639506 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10879688.047618542,
            "unit": "iter/sec",
            "range": "stddev: 2.2032167995028177e-7",
            "extra": "mean: 91.91440008419363 nsec\nrounds: 109891"
          }
        ]
      }
    ]
  }
}