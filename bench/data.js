window.BENCHMARK_DATA = {
  "lastUpdate": 1678830709398,
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
          "id": "b361e0720edb0b721d5237263b585968b534b5ab",
          "message": "fix(snowflake): ensure that memtables are translated correctly",
          "timestamp": "2023-03-14T17:44:08-04:00",
          "tree_id": "4014eb805c2c0ac543cd84f288cac36a2c240c91",
          "url": "https://github.com/ibis-project/ibis/commit/b361e0720edb0b721d5237263b585968b534b5ab"
        },
        "date": 1678830613608,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.20163630838071,
            "unit": "iter/sec",
            "range": "stddev: 0.0006559680326525925",
            "extra": "mean: 10.504021136367474 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1612287.987066775,
            "unit": "iter/sec",
            "range": "stddev: 1.7350988002117827e-7",
            "extra": "mean: 620.2365880175622 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.36814574178712,
            "unit": "iter/sec",
            "range": "stddev: 0.0006436802512944542",
            "extra": "mean: 11.445819200002916 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 266.3414185096274,
            "unit": "iter/sec",
            "range": "stddev: 0.00028783728837161884",
            "extra": "mean: 3.7545793875985276 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1504.2998052479409,
            "unit": "iter/sec",
            "range": "stddev: 0.000012419321084594843",
            "extra": "mean: 664.7611044762308 usec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5731470791896744,
            "unit": "iter/sec",
            "range": "stddev: 0.05252339947753029",
            "extra": "mean: 1.7447528502000182 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 100.14503265371494,
            "unit": "iter/sec",
            "range": "stddev: 0.0008127319394539901",
            "extra": "mean: 9.98551773863648 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 301.5990197129754,
            "unit": "iter/sec",
            "range": "stddev: 0.000025704902227349305",
            "extra": "mean: 3.31566064422781 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4810019883284153,
            "unit": "iter/sec",
            "range": "stddev: 0.00366162077738646",
            "extra": "mean: 675.2185397999938 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.40959081878778,
            "unit": "iter/sec",
            "range": "stddev: 0.00028677848725735074",
            "extra": "mean: 19.451623404762586 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11100.155959714926,
            "unit": "iter/sec",
            "range": "stddev: 0.000004406630605325849",
            "extra": "mean: 90.08882430384178 usec\nrounds: 5168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.9747761556666,
            "unit": "iter/sec",
            "range": "stddev: 0.0007879146695026931",
            "extra": "mean: 10.002523020836188 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 142198.85502143027,
            "unit": "iter/sec",
            "range": "stddev: 6.241598332338904e-7",
            "extra": "mean: 7.032405428646339 usec\nrounds: 33895"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.824533669650071,
            "unit": "iter/sec",
            "range": "stddev: 0.0008335400379277519",
            "extra": "mean: 113.32043566667632 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 131.16123353740267,
            "unit": "iter/sec",
            "range": "stddev: 0.0001764841288740327",
            "extra": "mean: 7.624203989472503 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 131.8613680144759,
            "unit": "iter/sec",
            "range": "stddev: 0.00468800403959817",
            "extra": "mean: 7.583722321841974 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4337.768737968596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000635555272456227",
            "extra": "mean: 230.5332673102131 usec\nrounds: 1762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4318.593919106771,
            "unit": "iter/sec",
            "range": "stddev: 0.00006471246633609416",
            "extra": "mean: 231.55684899561786 usec\nrounds: 1894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 75.5976850174721,
            "unit": "iter/sec",
            "range": "stddev: 0.0002264285091746404",
            "extra": "mean: 13.227918285710475 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 267.3591074554436,
            "unit": "iter/sec",
            "range": "stddev: 0.00026499851730020935",
            "extra": "mean: 3.7402877706967725 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 261.66514780106905,
            "unit": "iter/sec",
            "range": "stddev: 0.0002816580318767526",
            "extra": "mean: 3.821678234199726 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 78.99811906538899,
            "unit": "iter/sec",
            "range": "stddev: 0.0008541360212374164",
            "extra": "mean: 12.658529238807212 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 256.1150531294382,
            "unit": "iter/sec",
            "range": "stddev: 0.00028415259987842425",
            "extra": "mean: 3.904495217212434 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 72.21238741510997,
            "unit": "iter/sec",
            "range": "stddev: 0.02033142769635366",
            "extra": "mean: 13.848039592591514 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 83.15616035608042,
            "unit": "iter/sec",
            "range": "stddev: 0.00009280778934479708",
            "extra": "mean: 12.02556726666949 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.86437731027603,
            "unit": "iter/sec",
            "range": "stddev: 0.0004299265382460968",
            "extra": "mean: 32.39981127586393 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 240.67099072202097,
            "unit": "iter/sec",
            "range": "stddev: 0.00033740470200673933",
            "extra": "mean: 4.155050000001939 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10033533.509860627,
            "unit": "iter/sec",
            "range": "stddev: 6.366383857532591e-9",
            "extra": "mean: 99.66578563949608 nsec\nrounds: 106372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 642.1037722123654,
            "unit": "iter/sec",
            "range": "stddev: 0.00006537199907479888",
            "extra": "mean: 1.5573806653627107 msec\nrounds: 511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.45267384667705,
            "unit": "iter/sec",
            "range": "stddev: 0.00039967649401838275",
            "extra": "mean: 26.00599386111134 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7445475336339322,
            "unit": "iter/sec",
            "range": "stddev: 0.0031239135431723204",
            "extra": "mean: 1.3430975925999973 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 95.59729420215601,
            "unit": "iter/sec",
            "range": "stddev: 0.0007771147996299014",
            "extra": "mean: 10.460547114286912 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 256.5224522384865,
            "unit": "iter/sec",
            "range": "stddev: 0.00029006182182026526",
            "extra": "mean: 3.8982942478279035 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.17845931839109,
            "unit": "iter/sec",
            "range": "stddev: 0.0007720754448990245",
            "extra": "mean: 9.98218585915522 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.913432288527353,
            "unit": "iter/sec",
            "range": "stddev: 0.0006376753242115567",
            "extra": "mean: 33.429798037035305 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7135749573378101,
            "unit": "iter/sec",
            "range": "stddev: 0.0033608338764749444",
            "extra": "mean: 1.401394471200024 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2017047131155074,
            "unit": "iter/sec",
            "range": "stddev: 0.0013691030244713355",
            "extra": "mean: 454.19351380002126 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.48651555184694,
            "unit": "iter/sec",
            "range": "stddev: 0.0007780352407344112",
            "extra": "mean: 11.05137040476512 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 90.08031205600635,
            "unit": "iter/sec",
            "range": "stddev: 0.0009446762152815837",
            "extra": "mean: 11.101204882352784 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4454.466673922177,
            "unit": "iter/sec",
            "range": "stddev: 0.00002623976696349626",
            "extra": "mean: 224.49376619075605 usec\nrounds: 1822"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 99.42314599387649,
            "unit": "iter/sec",
            "range": "stddev: 0.0008544861236762077",
            "extra": "mean: 10.058020091836466 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4420.786256386315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000733252399630012",
            "extra": "mean: 226.2041053342919 usec\nrounds: 2212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 99.41719651068425,
            "unit": "iter/sec",
            "range": "stddev: 0.0001307464950979946",
            "extra": "mean: 10.058621999993042 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.38703890662268,
            "unit": "iter/sec",
            "range": "stddev: 0.0008947459699778417",
            "extra": "mean: 20.24822751351271 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4574.015280867803,
            "unit": "iter/sec",
            "range": "stddev: 0.00006322203263987042",
            "extra": "mean: 218.62629191091716 usec\nrounds: 1706"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 61528.951168769,
            "unit": "iter/sec",
            "range": "stddev: 6.466632617014221e-7",
            "extra": "mean: 16.25251172016698 usec\nrounds: 11135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 89.09787481077983,
            "unit": "iter/sec",
            "range": "stddev: 0.000876226099924769",
            "extra": "mean: 11.223612259256843 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12080.295272430836,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032372287651858155",
            "extra": "mean: 82.77943356915785 usec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 266.89945993426034,
            "unit": "iter/sec",
            "range": "stddev: 0.00028141987802584076",
            "extra": "mean: 3.7467292000002876 msec\nrounds: 255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1489107.5426785564,
            "unit": "iter/sec",
            "range": "stddev: 1.3939679433828308e-7",
            "extra": "mean: 671.5431702140422 nsec\nrounds: 109879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 994.9065874332777,
            "unit": "iter/sec",
            "range": "stddev: 0.000016416768883576907",
            "extra": "mean: 1.0051194882324206 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 112.72209636369888,
            "unit": "iter/sec",
            "range": "stddev: 0.0004843861231874437",
            "extra": "mean: 8.871375109752135 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 137.79104282383352,
            "unit": "iter/sec",
            "range": "stddev: 0.00011031215477749022",
            "extra": "mean: 7.257365787401032 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.72870290295396,
            "unit": "iter/sec",
            "range": "stddev: 0.0009403132990573967",
            "extra": "mean: 11.802375886072207 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4662.073202749189,
            "unit": "iter/sec",
            "range": "stddev: 0.00006893322149957969",
            "extra": "mean: 214.49684646957232 usec\nrounds: 2436"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 98.36328158751483,
            "unit": "iter/sec",
            "range": "stddev: 0.0008991712340921079",
            "extra": "mean: 10.16639526315813 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 247.7444954654146,
            "unit": "iter/sec",
            "range": "stddev: 0.00006438235686143847",
            "extra": "mean: 4.036416623995592 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.796401454488507,
            "unit": "iter/sec",
            "range": "stddev: 0.0004584096858230154",
            "extra": "mean: 50.51423119999754 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 375.14685827183325,
            "unit": "iter/sec",
            "range": "stddev: 0.008633069391818071",
            "extra": "mean: 2.6656227499988683 msec\nrounds: 380"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1617369.0788544463,
            "unit": "iter/sec",
            "range": "stddev: 8.902538807800756e-8",
            "extra": "mean: 618.2880661402789 nsec\nrounds: 99991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 64.93527428806252,
            "unit": "iter/sec",
            "range": "stddev: 0.00008538347675692354",
            "extra": "mean: 15.399950350003166 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 87.97371978664658,
            "unit": "iter/sec",
            "range": "stddev: 0.000913509005106855",
            "extra": "mean: 11.36703099999858 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10342.41656775531,
            "unit": "iter/sec",
            "range": "stddev: 0.000015714508180777714",
            "extra": "mean: 96.6892015467365 usec\nrounds: 4396"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7508493635406321,
            "unit": "iter/sec",
            "range": "stddev: 0.014036199735356652",
            "extra": "mean: 1.3318250618000094 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 572.3228440798362,
            "unit": "iter/sec",
            "range": "stddev: 0.000028447208297605737",
            "extra": "mean: 1.7472655693269952 msec\nrounds: 476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.65175297552896,
            "unit": "iter/sec",
            "range": "stddev: 0.00008139040598172077",
            "extra": "mean: 10.565044688169037 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 136.09929332046102,
            "unit": "iter/sec",
            "range": "stddev: 0.00006615424080856016",
            "extra": "mean: 7.347576725805534 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5105404.40039351,
            "unit": "iter/sec",
            "range": "stddev: 1.9521851097698868e-8",
            "extra": "mean: 195.87086968523377 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 81.17384662715884,
            "unit": "iter/sec",
            "range": "stddev: 0.000241829736529023",
            "extra": "mean: 12.319238788733509 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.088900329553375,
            "unit": "iter/sec",
            "range": "stddev: 0.0006377133394760363",
            "extra": "mean: 22.681445727274962 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4625197.261818032,
            "unit": "iter/sec",
            "range": "stddev: 2.3636306920885564e-8",
            "extra": "mean: 216.20699472761794 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4419.69345467627,
            "unit": "iter/sec",
            "range": "stddev: 0.000122855862893147",
            "extra": "mean: 226.26003596288945 usec\nrounds: 1724"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7140.478628298582,
            "unit": "iter/sec",
            "range": "stddev: 0.000017262008122674362",
            "extra": "mean: 140.04663441423642 usec\nrounds: 3452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 648076.4260081098,
            "unit": "iter/sec",
            "range": "stddev: 4.97796851121983e-7",
            "extra": "mean: 1.5430278897191152 usec\nrounds: 20832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 99.56117902170868,
            "unit": "iter/sec",
            "range": "stddev: 0.0009996890352647813",
            "extra": "mean: 10.044075510415121 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 188.45998409991643,
            "unit": "iter/sec",
            "range": "stddev: 0.004618778943031772",
            "extra": "mean: 5.30616621229166 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14211976296979653,
            "unit": "iter/sec",
            "range": "stddev: 0.21045418704981836",
            "extra": "mean: 7.036319081199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 267.57926697313565,
            "unit": "iter/sec",
            "range": "stddev: 0.0002919165583035668",
            "extra": "mean: 3.73721032766114 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4662.005812122967,
            "unit": "iter/sec",
            "range": "stddev: 0.00006541978907319348",
            "extra": "mean: 214.4999470827823 usec\nrounds: 2948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 24.887909857509747,
            "unit": "iter/sec",
            "range": "stddev: 0.03815209818889972",
            "extra": "mean: 40.18015195833158 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.771941049238389,
            "unit": "iter/sec",
            "range": "stddev: 0.0006622902835624097",
            "extra": "mean: 209.55833059999804 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1631080.928090183,
            "unit": "iter/sec",
            "range": "stddev: 2.3545181596798626e-7",
            "extra": "mean: 613.0903640513352 nsec\nrounds: 136968"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 239.33523751055904,
            "unit": "iter/sec",
            "range": "stddev: 0.0001990801604017783",
            "extra": "mean: 4.1782397377063285 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4651.72615088554,
            "unit": "iter/sec",
            "range": "stddev: 0.0000631096045611821",
            "extra": "mean: 214.9739618291227 usec\nrounds: 2122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 167.34388058764102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000572772624567771",
            "extra": "mean: 5.975718959596385 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5663360.336758344,
            "unit": "iter/sec",
            "range": "stddev: 1.671480587822942e-8",
            "extra": "mean: 176.5736136390313 nsec\nrounds: 199961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 427011.82796555123,
            "unit": "iter/sec",
            "range": "stddev: 3.8332124337865224e-7",
            "extra": "mean: 2.3418555049502614 usec\nrounds: 1744"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.123372533661275,
            "unit": "iter/sec",
            "range": "stddev: 0.0006836683431654215",
            "extra": "mean: 76.19992478572206 msec\nrounds: 14"
          }
        ]
      }
    ]
  }
}