window.BENCHMARK_DATA = {
  "lastUpdate": 1679791186711,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "4e5f539b650e5d69f542bb08f7f8862d81437f8a",
          "message": "chore(flake/nixpkgs): `aace3ac6` -> `0fc009e2`",
          "timestamp": "2023-03-26T00:33:15Z",
          "tree_id": "308614ae8079cd6a6787f8cf3ac135a426d65286",
          "url": "https://github.com/ibis-project/ibis/commit/4e5f539b650e5d69f542bb08f7f8862d81437f8a"
        },
        "date": 1679791102111,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 98.49599805432727,
            "unit": "iter/sec",
            "range": "stddev: 0.008788260192791605",
            "extra": "mean: 10.152696756759921 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.93432677658929,
            "unit": "iter/sec",
            "range": "stddev: 0.00011678081210385892",
            "extra": "mean: 21.306367187497344 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.06742800303526,
            "unit": "iter/sec",
            "range": "stddev: 0.0005003416849536568",
            "extra": "mean: 9.79744488094931 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.85509577857613,
            "unit": "iter/sec",
            "range": "stddev: 0.00009598982336636704",
            "extra": "mean: 6.0659332080528605 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 286.09930957772133,
            "unit": "iter/sec",
            "range": "stddev: 0.0042467359939315635",
            "extra": "mean: 3.4952898050540084 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1722.5629609943976,
            "unit": "iter/sec",
            "range": "stddev: 0.00001982309601162041",
            "extra": "mean: 580.5303043452891 usec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 278.8524954692861,
            "unit": "iter/sec",
            "range": "stddev: 0.00025046631028457703",
            "extra": "mean: 3.586125339553018 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5814464.4685333725,
            "unit": "iter/sec",
            "range": "stddev: 9.137733002428632e-9",
            "extra": "mean: 171.98488449124326 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 120.71772011592263,
            "unit": "iter/sec",
            "range": "stddev: 0.0005358788113566012",
            "extra": "mean: 8.28378798936661 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5599.5220782178085,
            "unit": "iter/sec",
            "range": "stddev: 0.00004065378959259669",
            "extra": "mean: 178.58666972490545 usec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 128098.5888622305,
            "unit": "iter/sec",
            "range": "stddev: 3.3080394274836735e-7",
            "extra": "mean: 7.806487244566728 usec\nrounds: 38611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 93.38629677291553,
            "unit": "iter/sec",
            "range": "stddev: 0.008211110926277942",
            "extra": "mean: 10.708209175824457 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11606.015968570238,
            "unit": "iter/sec",
            "range": "stddev: 0.000025401120089115934",
            "extra": "mean: 86.16221127974129 usec\nrounds: 5869"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 289.46402321867066,
            "unit": "iter/sec",
            "range": "stddev: 0.000041762270079322484",
            "extra": "mean: 3.4546607515524204 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6762922536995356,
            "unit": "iter/sec",
            "range": "stddev: 0.033671745943807986",
            "extra": "mean: 1.4786506787999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 256.6289272338334,
            "unit": "iter/sec",
            "range": "stddev: 0.004016759652529363",
            "extra": "mean: 3.8966768508088987 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9256845337986708,
            "unit": "iter/sec",
            "range": "stddev: 0.004300704313291331",
            "extra": "mean: 1.0802816331999907 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18149520606991354,
            "unit": "iter/sec",
            "range": "stddev: 0.03619096027691623",
            "extra": "mean: 5.509787402399991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.787640543097311,
            "unit": "iter/sec",
            "range": "stddev: 0.0009623856324805021",
            "extra": "mean: 559.3965765999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.56152295326002,
            "unit": "iter/sec",
            "range": "stddev: 0.0005624364444511822",
            "extra": "mean: 8.22628719767271 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 346.86484264404805,
            "unit": "iter/sec",
            "range": "stddev: 0.00011999611725865214",
            "extra": "mean: 2.8829673032795595 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.84872251490538,
            "unit": "iter/sec",
            "range": "stddev: 0.000588377358643014",
            "extra": "mean: 9.447445148515442 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.860185473594381,
            "unit": "iter/sec",
            "range": "stddev: 0.0027021944290071052",
            "extra": "mean: 1.1625399762000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 313.04610561515716,
            "unit": "iter/sec",
            "range": "stddev: 0.00020117935419573457",
            "extra": "mean: 3.1944176338975088 msec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.29864419908839,
            "unit": "iter/sec",
            "range": "stddev: 0.00008125769976988091",
            "extra": "mean: 8.984835414627545 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12872676.434232004,
            "unit": "iter/sec",
            "range": "stddev: 3.449977482779339e-9",
            "extra": "mean: 77.68392261769823 nsec\nrounds: 125016"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1137.2042041191692,
            "unit": "iter/sec",
            "range": "stddev: 0.000053629084332958413",
            "extra": "mean: 879.3495454710865 usec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 315.22515760696433,
            "unit": "iter/sec",
            "range": "stddev: 0.000021210572460600423",
            "extra": "mean: 3.17233563333432 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 117.69977195667141,
            "unit": "iter/sec",
            "range": "stddev: 0.00007976577087206757",
            "extra": "mean: 8.496193181819656 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.558374073234958,
            "unit": "iter/sec",
            "range": "stddev: 0.00027638558107053964",
            "extra": "mean: 179.90872633334712 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5492.504377011264,
            "unit": "iter/sec",
            "range": "stddev: 0.00004636427072470594",
            "extra": "mean: 182.0663091659015 usec\nrounds: 1931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5351.849531214392,
            "unit": "iter/sec",
            "range": "stddev: 0.00004702543752387381",
            "extra": "mean: 186.85129209398553 usec\nrounds: 1657"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 684.6180966186104,
            "unit": "iter/sec",
            "range": "stddev: 0.00002441854342755935",
            "extra": "mean: 1.4606683710802983 msec\nrounds: 574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5510.240061855609,
            "unit": "iter/sec",
            "range": "stddev: 0.000044175198048313775",
            "extra": "mean: 181.4802964615744 usec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.52872003222338,
            "unit": "iter/sec",
            "range": "stddev: 0.0005721043170812175",
            "extra": "mean: 9.659155446804997 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5788.618501886521,
            "unit": "iter/sec",
            "range": "stddev: 0.000050249052002814435",
            "extra": "mean: 172.75279061387414 usec\nrounds: 3047"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9187342344367126,
            "unit": "iter/sec",
            "range": "stddev: 0.002543609128751671",
            "extra": "mean: 1.088454051799988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 120.77165285996878,
            "unit": "iter/sec",
            "range": "stddev: 0.0005783527844094958",
            "extra": "mean: 8.280088715515642 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.24120575271544,
            "unit": "iter/sec",
            "range": "stddev: 0.0005658915189491616",
            "extra": "mean: 8.248020908333823 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 64.37060992442773,
            "unit": "iter/sec",
            "range": "stddev: 0.014861041751360491",
            "extra": "mean: 15.53503999999407 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13146.93638909105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015863942590808124",
            "extra": "mean: 76.06334817515138 usec\nrounds: 2987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.87813525448553,
            "unit": "iter/sec",
            "range": "stddev: 0.0005936997916051442",
            "extra": "mean: 9.44482066666956 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11786.219163710059,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018961015102032275",
            "extra": "mean: 84.84485025350747 usec\nrounds: 6698"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1740152.5135789637,
            "unit": "iter/sec",
            "range": "stddev: 9.616361648274046e-8",
            "extra": "mean: 574.6622736781298 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5746.432638910317,
            "unit": "iter/sec",
            "range": "stddev: 0.00006446154587514189",
            "extra": "mean: 174.02100796044965 usec\nrounds: 2638"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.39703387670871,
            "unit": "iter/sec",
            "range": "stddev: 0.00033174675754985033",
            "extra": "mean: 96.1812774545427 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1807480.3688633265,
            "unit": "iter/sec",
            "range": "stddev: 9.191399891188296e-8",
            "extra": "mean: 553.2563546617504 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 193.48440993697048,
            "unit": "iter/sec",
            "range": "stddev: 0.00002734707108422172",
            "extra": "mean: 5.168375066113907 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1893208.162109122,
            "unit": "iter/sec",
            "range": "stddev: 7.930733504368053e-8",
            "extra": "mean: 528.2039344717136 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5623.102284738314,
            "unit": "iter/sec",
            "range": "stddev: 0.00009497357346480218",
            "extra": "mean: 177.83777519290453 usec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.6005993001099,
            "unit": "iter/sec",
            "range": "stddev: 0.0005709119746284182",
            "extra": "mean: 8.223643680669722 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 302.397751141253,
            "unit": "iter/sec",
            "range": "stddev: 0.00020304937447276355",
            "extra": "mean: 3.306902899330392 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.59644235475221,
            "unit": "iter/sec",
            "range": "stddev: 0.023132073959180734",
            "extra": "mean: 26.598261361120496 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 754.8975319355696,
            "unit": "iter/sec",
            "range": "stddev: 0.00004410734061296976",
            "extra": "mean: 1.3246830963084268 msec\nrounds: 623"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.67002581644036,
            "unit": "iter/sec",
            "range": "stddev: 0.0002631572952486105",
            "extra": "mean: 17.044478608696686 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 2377037.036709127,
            "unit": "iter/sec",
            "range": "stddev: 1.4899606732203441e-8",
            "extra": "mean: 420.69180435914194 nsec\nrounds: 117648"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.13897383627271,
            "unit": "iter/sec",
            "range": "stddev: 0.00017245763685154385",
            "extra": "mean: 10.40160883871121 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7370423.269207021,
            "unit": "iter/sec",
            "range": "stddev: 3.858612352787326e-9",
            "extra": "mean: 135.6774181718947 nsec\nrounds: 70423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.67882228911455,
            "unit": "iter/sec",
            "range": "stddev: 0.00002860362420748191",
            "extra": "mean: 10.133886651688503 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 140.0883001071183,
            "unit": "iter/sec",
            "range": "stddev: 0.00006673055207897548",
            "extra": "mean: 7.138354874999209 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 159.5225209234142,
            "unit": "iter/sec",
            "range": "stddev: 0.0000962593674943068",
            "extra": "mean: 6.26870735374157 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 182.0882240808105,
            "unit": "iter/sec",
            "range": "stddev: 0.003948824783079193",
            "extra": "mean: 5.491843336097348 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 544.0982907294936,
            "unit": "iter/sec",
            "range": "stddev: 0.000029505471840300707",
            "extra": "mean: 1.8379032190291602 msec\nrounds: 452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.0856341817696,
            "unit": "iter/sec",
            "range": "stddev: 0.00009364131022833143",
            "extra": "mean: 13.682579500000273 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.85885620116746,
            "unit": "iter/sec",
            "range": "stddev: 0.00009572742842505456",
            "extra": "mean: 14.73647002000007 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 87.54286238560371,
            "unit": "iter/sec",
            "range": "stddev: 0.015061710572786753",
            "extra": "mean: 11.422975817208926 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 488557.4037601913,
            "unit": "iter/sec",
            "range": "stddev: 2.7903597050799195e-7",
            "extra": "mean: 2.046842381884874 usec\nrounds: 2100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.0355933225122,
            "unit": "iter/sec",
            "range": "stddev: 0.00020636559574326407",
            "extra": "mean: 3.344083521594342 msec\nrounds: 301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5842723793111877,
            "unit": "iter/sec",
            "range": "stddev: 0.0006795257753934211",
            "extra": "mean: 386.9561149999754 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6396155.557422853,
            "unit": "iter/sec",
            "range": "stddev: 7.827099385480848e-9",
            "extra": "mean: 156.34391487549794 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 110.3085387103693,
            "unit": "iter/sec",
            "range": "stddev: 0.00007524089887214232",
            "extra": "mean: 9.065481346150742 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.508513750954936,
            "unit": "iter/sec",
            "range": "stddev: 0.00046814127139395856",
            "extra": "mean: 64.48071143751122 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 311.6109360805154,
            "unit": "iter/sec",
            "range": "stddev: 0.00019938392697710903",
            "extra": "mean: 3.2091299893968284 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.92697308750076,
            "unit": "iter/sec",
            "range": "stddev: 0.0005644795226388871",
            "extra": "mean: 8.701177566372 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.0876965840646,
            "unit": "iter/sec",
            "range": "stddev: 0.000030378340846664423",
            "extra": "mean: 6.53220358208782 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.482986244765236,
            "unit": "iter/sec",
            "range": "stddev: 0.00012240598252895941",
            "extra": "mean: 20.208966270821804 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.38201931955545,
            "unit": "iter/sec",
            "range": "stddev: 0.0005366426280187433",
            "extra": "mean: 8.238452495730506 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.74514130615792,
            "unit": "iter/sec",
            "range": "stddev: 0.0005920099905353318",
            "extra": "mean: 9.456699264363898 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5634.078080051745,
            "unit": "iter/sec",
            "range": "stddev: 0.00002064162163431642",
            "extra": "mean: 177.49132791408098 usec\nrounds: 2583"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5249.247631021857,
            "unit": "iter/sec",
            "range": "stddev: 0.00004851591819886241",
            "extra": "mean: 190.50349122229022 usec\nrounds: 2791"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 38.291195938703275,
            "unit": "iter/sec",
            "range": "stddev: 0.02446025682132909",
            "extra": "mean: 26.115663809529604 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8030.673327272021,
            "unit": "iter/sec",
            "range": "stddev: 0.000020540646221700937",
            "extra": "mean: 124.5225598461362 usec\nrounds: 3910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.91535494089807,
            "unit": "iter/sec",
            "range": "stddev: 0.0005627347493463863",
            "extra": "mean: 10.762483775002352 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 295.5741708235509,
            "unit": "iter/sec",
            "range": "stddev: 0.00022929328098529405",
            "extra": "mean: 3.383245556314089 msec\nrounds: 293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 306.54170485661473,
            "unit": "iter/sec",
            "range": "stddev: 0.00021310815435426209",
            "extra": "mean: 3.262198859589925 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71474.60182009541,
            "unit": "iter/sec",
            "range": "stddev: 4.1335426510542224e-7",
            "extra": "mean: 13.99098385349585 usec\nrounds: 13625"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.102978661297055,
            "unit": "iter/sec",
            "range": "stddev: 0.0004875283906346252",
            "extra": "mean: 35.58341669230895 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 745259.667574139,
            "unit": "iter/sec",
            "range": "stddev: 2.941786877970782e-7",
            "extra": "mean: 1.341814193776318 usec\nrounds: 24391"
          }
        ]
      }
    ]
  }
}