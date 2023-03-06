window.BENCHMARK_DATA = {
  "lastUpdate": 1678137290103,
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
      },
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
          "id": "5f7dd29ceadacd2ad649c9716a6fc5778d06e797",
          "message": "test(backends): strict validate exception in test_column",
          "timestamp": "2023-03-06T16:05:51-05:00",
          "tree_id": "6122774efd8d9106d500bd0a4b511d142c993016",
          "url": "https://github.com/ibis-project/ibis/commit/5f7dd29ceadacd2ad649c9716a6fc5778d06e797"
        },
        "date": 1678137203294,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 279.46594947563773,
            "unit": "iter/sec",
            "range": "stddev: 0.0003185377284906498",
            "extra": "mean: 3.578253457626237 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.472867885817383,
            "unit": "iter/sec",
            "range": "stddev: 0.000271312673878358",
            "extra": "mean: 40.8615779999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 110.52089335814468,
            "unit": "iter/sec",
            "range": "stddev: 0.006838885246167813",
            "extra": "mean: 9.048062946428459 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.770600390195001,
            "unit": "iter/sec",
            "range": "stddev: 0.004010855526583052",
            "extra": "mean: 564.7801759999993 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.2155735480019,
            "unit": "iter/sec",
            "range": "stddev: 0.00048379898352164826",
            "extra": "mean: 11.208805371429419 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9186663061337469,
            "unit": "iter/sec",
            "range": "stddev: 0.0032126156858151896",
            "extra": "mean: 1.0885345346000008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5743.265003289802,
            "unit": "iter/sec",
            "range": "stddev: 0.000047360986596475524",
            "extra": "mean: 174.11698736297032 usec\nrounds: 2374"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.23030468909103,
            "unit": "iter/sec",
            "range": "stddev: 0.0009179168345871398",
            "extra": "mean: 26.157259486486613 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 485395.6018077873,
            "unit": "iter/sec",
            "range": "stddev: 3.259321349725087e-7",
            "extra": "mean: 2.0601752390743577 usec\nrounds: 2197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.38893840086439,
            "unit": "iter/sec",
            "range": "stddev: 0.010171830255430279",
            "extra": "mean: 11.063300639345012 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.10555480407527,
            "unit": "iter/sec",
            "range": "stddev: 0.00010670070065724631",
            "extra": "mean: 6.09363894594485 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 100.5420014623949,
            "unit": "iter/sec",
            "range": "stddev: 0.0006209224762570029",
            "extra": "mean: 9.946092035715282 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 347.6843271543782,
            "unit": "iter/sec",
            "range": "stddev: 0.00008102192897778121",
            "extra": "mean: 2.876172211110286 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.64714930036556,
            "unit": "iter/sec",
            "range": "stddev: 0.0006009723610955737",
            "extra": "mean: 8.2204967872354 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5773937.241635028,
            "unit": "iter/sec",
            "range": "stddev: 1.0888835542748613e-8",
            "extra": "mean: 173.1920452459026 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6474578.540366811,
            "unit": "iter/sec",
            "range": "stddev: 9.363255352472306e-9",
            "extra": "mean: 154.45020764909063 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13373.801088954138,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019683813041046086",
            "extra": "mean: 74.77305766316002 usec\nrounds: 5879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6817901905810093,
            "unit": "iter/sec",
            "range": "stddev: 0.0017942299217769784",
            "extra": "mean: 1.4667268814000067 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12498959.243391989,
            "unit": "iter/sec",
            "range": "stddev: 3.4948241010139987e-9",
            "extra": "mean: 80.00666139691775 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.98984712924513,
            "unit": "iter/sec",
            "range": "stddev: 0.0001410033489882266",
            "extra": "mean: 5.154908954249307 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 112.00814986233982,
            "unit": "iter/sec",
            "range": "stddev: 0.0009302905259614331",
            "extra": "mean: 8.927921773808597 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5436.950176882434,
            "unit": "iter/sec",
            "range": "stddev: 0.00017563428002711763",
            "extra": "mean: 183.9266440682014 usec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.15351755676008,
            "unit": "iter/sec",
            "range": "stddev: 0.0003062026166951776",
            "extra": "mean: 11.092190599999679 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.46372062190635,
            "unit": "iter/sec",
            "range": "stddev: 0.00011169664731358119",
            "extra": "mean: 13.429358507044729 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5541.948389914448,
            "unit": "iter/sec",
            "range": "stddev: 0.00004845960078215162",
            "extra": "mean: 180.44195464177486 usec\nrounds: 2359"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 118.65864410255391,
            "unit": "iter/sec",
            "range": "stddev: 0.0007888883167503838",
            "extra": "mean: 8.427536043102963 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.58198383308514,
            "unit": "iter/sec",
            "range": "stddev: 0.001117541160256543",
            "extra": "mean: 17.991441309526465 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 99.04193111965753,
            "unit": "iter/sec",
            "range": "stddev: 0.0007363615159970461",
            "extra": "mean: 10.096733663157776 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 222.70252919732704,
            "unit": "iter/sec",
            "range": "stddev: 0.004189965286431413",
            "extra": "mean: 4.4902947604781955 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 56.42458719443587,
            "unit": "iter/sec",
            "range": "stddev: 0.032012565368105594",
            "extra": "mean: 17.722770333331066 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5121551178049115,
            "unit": "iter/sec",
            "range": "stddev: 0.0015783375555121534",
            "extra": "mean: 398.0645912 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9282154616679992,
            "unit": "iter/sec",
            "range": "stddev: 0.007312237991526163",
            "extra": "mean: 1.077336072600002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 298.9139160973911,
            "unit": "iter/sec",
            "range": "stddev: 0.0003176593072834561",
            "extra": "mean: 3.345444779072057 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.8116564657748,
            "unit": "iter/sec",
            "range": "stddev: 0.00006537486892741907",
            "extra": "mean: 1.8559360919533479 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1694440.0987250526,
            "unit": "iter/sec",
            "range": "stddev: 1.3472717413450646e-7",
            "extra": "mean: 590.1654480157958 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 727.2973586728122,
            "unit": "iter/sec",
            "range": "stddev: 0.00003374847669175518",
            "extra": "mean: 1.3749534328363593 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 285.30220452617385,
            "unit": "iter/sec",
            "range": "stddev: 0.0002723905979565542",
            "extra": "mean: 3.50505528571287 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5172.80644126369,
            "unit": "iter/sec",
            "range": "stddev: 0.00005170209389052245",
            "extra": "mean: 193.31865813167852 usec\nrounds: 2890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17030090087972172,
            "unit": "iter/sec",
            "range": "stddev: 0.11952837602871001",
            "extra": "mean: 5.871959542400009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11806.721592474216,
            "unit": "iter/sec",
            "range": "stddev: 0.000002313779082928506",
            "extra": "mean: 84.69751676345237 usec\nrounds: 5339"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 103.20272731782866,
            "unit": "iter/sec",
            "range": "stddev: 0.0007142192572458013",
            "extra": "mean: 9.689666406977272 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5443.967922049749,
            "unit": "iter/sec",
            "range": "stddev: 0.0000511798620788622",
            "extra": "mean: 183.68954672743232 usec\nrounds: 2643"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.90831061484967,
            "unit": "iter/sec",
            "range": "stddev: 0.00010187959190762886",
            "extra": "mean: 9.016456877363241 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 688.4636392316974,
            "unit": "iter/sec",
            "range": "stddev: 0.000022515632039083177",
            "extra": "mean: 1.4525095342957646 msec\nrounds: 554"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 287.82977323045674,
            "unit": "iter/sec",
            "range": "stddev: 0.00028769490565164587",
            "extra": "mean: 3.474275745613466 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 320.14116090938955,
            "unit": "iter/sec",
            "range": "stddev: 0.0000253247238342803",
            "extra": "mean: 3.123622083331649 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 156.1168615889436,
            "unit": "iter/sec",
            "range": "stddev: 0.00008296473482838462",
            "extra": "mean: 6.405458000001335 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5538.240127069177,
            "unit": "iter/sec",
            "range": "stddev: 0.000049954138604011863",
            "extra": "mean: 180.56277392385252 usec\nrounds: 2623"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 290.7864643988583,
            "unit": "iter/sec",
            "range": "stddev: 0.00034410413936676403",
            "extra": "mean: 3.4389496157164543 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 113.98972704487204,
            "unit": "iter/sec",
            "range": "stddev: 0.0009459382736135985",
            "extra": "mean: 8.772720366339241 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 138723.89841056606,
            "unit": "iter/sec",
            "range": "stddev: 4.402466265950209e-7",
            "extra": "mean: 7.208563278984625 usec\nrounds: 45663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.20146874352987,
            "unit": "iter/sec",
            "range": "stddev: 0.0012467697884324023",
            "extra": "mean: 19.91973591666844 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 289.9065223147385,
            "unit": "iter/sec",
            "range": "stddev: 0.0005111136355543962",
            "extra": "mean: 3.449387726828529 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 95.61238352387612,
            "unit": "iter/sec",
            "range": "stddev: 0.0008364826268132201",
            "extra": "mean: 10.458896255319084 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 93.23620578638156,
            "unit": "iter/sec",
            "range": "stddev: 0.00029052773418116747",
            "extra": "mean: 10.725447175436903 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 115.2016620859392,
            "unit": "iter/sec",
            "range": "stddev: 0.0009406783231885287",
            "extra": "mean: 8.680430315788419 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.68845147047685,
            "unit": "iter/sec",
            "range": "stddev: 0.00396931729872569",
            "extra": "mean: 6.223222582885673 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1898281.5765490944,
            "unit": "iter/sec",
            "range": "stddev: 1.6047377056059184e-7",
            "extra": "mean: 526.7922379660399 nsec\nrounds: 84746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1158.3764517976877,
            "unit": "iter/sec",
            "range": "stddev: 0.000021083459033287456",
            "extra": "mean: 863.2772173917186 usec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 115.54731254989584,
            "unit": "iter/sec",
            "range": "stddev: 0.0008585443101874048",
            "extra": "mean: 8.654463508774194 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2567702.1122866226,
            "unit": "iter/sec",
            "range": "stddev: 2.8459443993758303e-8",
            "extra": "mean: 389.4532762249043 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2981.4919015606106,
            "unit": "iter/sec",
            "range": "stddev: 0.0053984307228522495",
            "extra": "mean: 335.40255449849354 usec\nrounds: 1367"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1757.5267244454187,
            "unit": "iter/sec",
            "range": "stddev: 0.00002274600600725241",
            "extra": "mean: 568.981390775464 usec\nrounds: 1236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 115.23229652319397,
            "unit": "iter/sec",
            "range": "stddev: 0.00026059978155076755",
            "extra": "mean: 8.678122628569845 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8076.376288339579,
            "unit": "iter/sec",
            "range": "stddev: 0.000012489726204064768",
            "extra": "mean: 123.81790598882432 usec\nrounds: 4893"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 301.50927835699895,
            "unit": "iter/sec",
            "range": "stddev: 0.0002797991042500732",
            "extra": "mean: 3.3166475189395674 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1874241.007334471,
            "unit": "iter/sec",
            "range": "stddev: 1.319228562762844e-7",
            "extra": "mean: 533.5493120077397 nsec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.45593091507798,
            "unit": "iter/sec",
            "range": "stddev: 0.0003942999263514036",
            "extra": "mean: 95.63949954546368 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 128.32724199562557,
            "unit": "iter/sec",
            "range": "stddev: 0.0004282867559842114",
            "extra": "mean: 7.79257766666635 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4039.1541517446735,
            "unit": "iter/sec",
            "range": "stddev: 0.0027851081126930217",
            "extra": "mean: 247.57658718423997 usec\nrounds: 2185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.507771102430022,
            "unit": "iter/sec",
            "range": "stddev: 0.0010172442001246198",
            "extra": "mean: 181.56164833335234 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5508.1250750004365,
            "unit": "iter/sec",
            "range": "stddev: 0.000054959246584721805",
            "extra": "mean: 181.549980507645 usec\nrounds: 2206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.36764619530253,
            "unit": "iter/sec",
            "range": "stddev: 0.001751666708556714",
            "extra": "mean: 29.09713380768809 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8341881058649026,
            "unit": "iter/sec",
            "range": "stddev: 0.01396338751989709",
            "extra": "mean: 1.198770388799994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 110.27946745429234,
            "unit": "iter/sec",
            "range": "stddev: 0.0008602168246648788",
            "extra": "mean: 9.067871137612006 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 286.5065602200766,
            "unit": "iter/sec",
            "range": "stddev: 0.00017147872690524953",
            "extra": "mean: 3.4903214754728893 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 28.420507810019586,
            "unit": "iter/sec",
            "range": "stddev: 0.03114120856417251",
            "extra": "mean: 35.185859685710895 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69280.25704003229,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014053683671909806",
            "extra": "mean: 14.434126585618309 usec\nrounds: 12063"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 739756.4887885285,
            "unit": "iter/sec",
            "range": "stddev: 4.2191716391275205e-7",
            "extra": "mean: 1.3517961858471326 usec\nrounds: 20921"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11607.394446626433,
            "unit": "iter/sec",
            "range": "stddev: 0.000011395127588607572",
            "extra": "mean: 86.15197877510224 usec\nrounds: 4193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.311262717193923,
            "unit": "iter/sec",
            "range": "stddev: 0.0003125468422069324",
            "extra": "mean: 65.311399750005 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 254.30674191693006,
            "unit": "iter/sec",
            "range": "stddev: 0.009101056354153612",
            "extra": "mean: 3.932259099629583 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 137.11990875503787,
            "unit": "iter/sec",
            "range": "stddev: 0.0002767267971133957",
            "extra": "mean: 7.292886999994153 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 66.09684035795962,
            "unit": "iter/sec",
            "range": "stddev: 0.0006729796554789673",
            "extra": "mean: 15.129316236363428 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.47991544813128,
            "unit": "iter/sec",
            "range": "stddev: 0.0006107743987986036",
            "extra": "mean: 21.987727772723662 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 85.61937343988019,
            "unit": "iter/sec",
            "range": "stddev: 0.0012635902467461892",
            "extra": "mean: 11.679599602561625 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7227912.31186806,
            "unit": "iter/sec",
            "range": "stddev: 7.517196993907405e-9",
            "extra": "mean: 138.35253623074405 nsec\nrounds: 64517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 92.07972528058585,
            "unit": "iter/sec",
            "range": "stddev: 0.0008598831193963978",
            "extra": "mean: 10.860154034482557 msec\nrounds: 87"
          }
        ]
      }
    ]
  }
}