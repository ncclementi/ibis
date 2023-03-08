window.BENCHMARK_DATA = {
  "lastUpdate": 1678315364678,
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
          "id": "065b66d2f390939d7a517271890e679f01732608",
          "message": "refactor(backend): normalize exceptions\n\nBREAKING CHANGE: Backends now raise `ibis.common.exceptions.UnsupportedOperationError` in more places during compilation. You may need to catch this error type instead of the previous type, which differed between backends.",
          "timestamp": "2023-03-08T17:36:21-05:00",
          "tree_id": "c3ad6e1c947677cf872a4dbb196cf7473d552f61",
          "url": "https://github.com/ibis-project/ibis/commit/065b66d2f390939d7a517271890e679f01732608"
        },
        "date": 1678315271589,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 60.25202287782767,
            "unit": "iter/sec",
            "range": "stddev: 0.013411679311664183",
            "extra": "mean: 16.596953135128565 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 149.1636079699741,
            "unit": "iter/sec",
            "range": "stddev: 0.0008515785271022531",
            "extra": "mean: 6.704048082567802 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 364444.0384388978,
            "unit": "iter/sec",
            "range": "stddev: 0.000009289270585058239",
            "extra": "mean: 2.743905495843798 usec\nrounds: 1492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 55.30141717969851,
            "unit": "iter/sec",
            "range": "stddev: 0.0012475468055210322",
            "extra": "mean: 18.082719232141237 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3714.202892378946,
            "unit": "iter/sec",
            "range": "stddev: 0.00006093194585464834",
            "extra": "mean: 269.236772727701 usec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5921798425054315,
            "unit": "iter/sec",
            "range": "stddev: 0.07644801710533168",
            "extra": "mean: 1.6886761895999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5113677473128779,
            "unit": "iter/sec",
            "range": "stddev: 0.008794547612989919",
            "extra": "mean: 1.9555398346000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.72917078498316,
            "unit": "iter/sec",
            "range": "stddev: 0.0024071609811376756",
            "extra": "mean: 20.52158868888796 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 224.3128094415607,
            "unit": "iter/sec",
            "range": "stddev: 0.0006458644473960347",
            "extra": "mean: 4.458060163793392 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3421.6228874542826,
            "unit": "iter/sec",
            "range": "stddev: 0.000059107141490091916",
            "extra": "mean: 292.25897560675037 usec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 36.4710673521349,
            "unit": "iter/sec",
            "range": "stddev: 0.0023197266079184294",
            "extra": "mean: 27.418994633329895 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 24.667724472290974,
            "unit": "iter/sec",
            "range": "stddev: 0.02318265504264083",
            "extra": "mean: 40.53880207407419 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 503.8638178086838,
            "unit": "iter/sec",
            "range": "stddev: 0.00037534590813380835",
            "extra": "mean: 1.9846632456147075 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 212.58545356167286,
            "unit": "iter/sec",
            "range": "stddev: 0.0003171922956866827",
            "extra": "mean: 4.703990716419792 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.404673090036866,
            "unit": "iter/sec",
            "range": "stddev: 0.00116315585042363",
            "extra": "mean: 51.533978199995545 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5738934209124182,
            "unit": "iter/sec",
            "range": "stddev: 0.032296464201624714",
            "extra": "mean: 1.742483819399996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 123.04636547419054,
            "unit": "iter/sec",
            "range": "stddev: 0.000681749513601964",
            "extra": "mean: 8.127017780218416 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3494.5494781377224,
            "unit": "iter/sec",
            "range": "stddev: 0.00009012418476838213",
            "extra": "mean: 286.1599202575633 usec\nrounds: 2019"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 78.2747739727518,
            "unit": "iter/sec",
            "range": "stddev: 0.0011743803772490589",
            "extra": "mean: 12.77550798611197 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 567.9269193364818,
            "unit": "iter/sec",
            "range": "stddev: 0.00028993829859676754",
            "extra": "mean: 1.7607899290428355 msec\nrounds: 606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4698990.15890707,
            "unit": "iter/sec",
            "range": "stddev: 2.8089219672254684e-7",
            "extra": "mean: 212.8116821237112 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 124.67860286949364,
            "unit": "iter/sec",
            "range": "stddev: 0.004827326544708073",
            "extra": "mean: 8.020622440297492 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.690611919080468,
            "unit": "iter/sec",
            "range": "stddev: 0.018236644204959237",
            "extra": "mean: 591.5018040000007 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9474.126392596056,
            "unit": "iter/sec",
            "range": "stddev: 0.000050804536864906714",
            "extra": "mean: 105.55062900379826 usec\nrounds: 5682"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3666.1577565019707,
            "unit": "iter/sec",
            "range": "stddev: 0.00011078556047906715",
            "extra": "mean: 272.765130803902 usec\nrounds: 1766"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5356064.762223102,
            "unit": "iter/sec",
            "range": "stddev: 1.342143648932765e-7",
            "extra": "mean: 186.7042398466605 nsec\nrounds: 53476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 212.87449794959335,
            "unit": "iter/sec",
            "range": "stddev: 0.0005078000555392427",
            "extra": "mean: 4.697603562812819 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 100.06908940781035,
            "unit": "iter/sec",
            "range": "stddev: 0.0006828357615577423",
            "extra": "mean: 9.993095829269636 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 88.72117076321032,
            "unit": "iter/sec",
            "range": "stddev: 0.0014100909656675556",
            "extra": "mean: 11.271266952381858 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9127394.922782538,
            "unit": "iter/sec",
            "range": "stddev: 1.6408619360354125e-7",
            "extra": "mean: 109.56028619992983 nsec\nrounds: 47170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 221.51667085836442,
            "unit": "iter/sec",
            "range": "stddev: 0.0006867928338174468",
            "extra": "mean: 4.514332921874716 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10610401796331334,
            "unit": "iter/sec",
            "range": "stddev: 0.122310907257198",
            "extra": "mean: 9.424713778000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 195.1792180167611,
            "unit": "iter/sec",
            "range": "stddev: 0.0006342797608962871",
            "extra": "mean: 5.123496293104958 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 183.6454225364466,
            "unit": "iter/sec",
            "range": "stddev: 0.004386395189942673",
            "extra": "mean: 5.445275935486702 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.282787152428609,
            "unit": "iter/sec",
            "range": "stddev: 0.0032121593100880174",
            "extra": "mean: 233.4928084000012 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 84.44277852397381,
            "unit": "iter/sec",
            "range": "stddev: 0.001110593395158877",
            "extra": "mean: 11.842338888885495 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.533824095500083,
            "unit": "iter/sec",
            "range": "stddev: 0.0018782175161406013",
            "extra": "mean: 35.04612619230748 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 88.36913972904006,
            "unit": "iter/sec",
            "range": "stddev: 0.0005872667012269028",
            "extra": "mean: 11.316167647056746 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 218.0351041210793,
            "unit": "iter/sec",
            "range": "stddev: 0.0006160119921873558",
            "extra": "mean: 4.586417421318907 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10384.30929010136,
            "unit": "iter/sec",
            "range": "stddev: 0.00004205297314971878",
            "extra": "mean: 96.29913478725354 usec\nrounds: 6054"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 91.98945220325227,
            "unit": "iter/sec",
            "range": "stddev: 0.0009570821923603712",
            "extra": "mean: 10.870811555551855 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.883150712328113,
            "unit": "iter/sec",
            "range": "stddev: 0.0012251171115815087",
            "extra": "mean: 35.86395276190452 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 93.43115460336244,
            "unit": "iter/sec",
            "range": "stddev: 0.0011273014276628334",
            "extra": "mean: 10.703067988886989 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 72.38861842967572,
            "unit": "iter/sec",
            "range": "stddev: 0.0023648286801113525",
            "extra": "mean: 13.814326363632462 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 60738.47732565397,
            "unit": "iter/sec",
            "range": "stddev: 0.000011176378199834818",
            "extra": "mean: 16.464028142135074 usec\nrounds: 12579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1583136.1642176392,
            "unit": "iter/sec",
            "range": "stddev: 0.000004056491032013896",
            "extra": "mean: 631.6576063399981 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3669.55740790445,
            "unit": "iter/sec",
            "range": "stddev: 0.00010960015717255127",
            "extra": "mean: 272.51242829610436 usec\nrounds: 1555"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.995398887802027,
            "unit": "iter/sec",
            "range": "stddev: 0.00442827620249297",
            "extra": "mean: 125.07193375000014 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 221.28411569346227,
            "unit": "iter/sec",
            "range": "stddev: 0.0006548721674335447",
            "extra": "mean: 4.5190771911765575 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 91.23632703521638,
            "unit": "iter/sec",
            "range": "stddev: 0.0009822933961122085",
            "extra": "mean: 10.960546445649978 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.100596585902494,
            "unit": "iter/sec",
            "range": "stddev: 0.0009511773121619564",
            "extra": "mean: 18.832180131578536 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 219.17284492409954,
            "unit": "iter/sec",
            "range": "stddev: 0.0006800759886032719",
            "extra": "mean: 4.562609023696819 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 78.42385200497449,
            "unit": "iter/sec",
            "range": "stddev: 0.00189470770276321",
            "extra": "mean: 12.75122267567996 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 625941.9829073943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014369790253201003",
            "extra": "mean: 1.5975921527985224 usec\nrounds: 16261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1561990.3209214867,
            "unit": "iter/sec",
            "range": "stddev: 0.000002378852279670888",
            "extra": "mean: 640.2088326706506 nsec\nrounds: 33558"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1302.0760706046765,
            "unit": "iter/sec",
            "range": "stddev: 0.00019645948876533204",
            "extra": "mean: 768.004283755561 usec\nrounds: 948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1392188.5582034374,
            "unit": "iter/sec",
            "range": "stddev: 0.000005612637248535507",
            "extra": "mean: 718.2935056516046 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.916876333647934,
            "unit": "iter/sec",
            "range": "stddev: 0.003282776503087173",
            "extra": "mean: 32.34479412500235 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 87.62560537549895,
            "unit": "iter/sec",
            "range": "stddev: 0.0014675935287592902",
            "extra": "mean: 11.412189344823753 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 84.02855902163304,
            "unit": "iter/sec",
            "range": "stddev: 0.0010546410940876778",
            "extra": "mean: 11.900715800000228 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 113615.03250768856,
            "unit": "iter/sec",
            "range": "stddev: 0.000018168028493226373",
            "extra": "mean: 8.801652192744195 usec\nrounds: 30031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 9.672233563413814,
            "unit": "iter/sec",
            "range": "stddev: 0.05586868925206954",
            "extra": "mean: 103.38873574999259 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 203.4532951934368,
            "unit": "iter/sec",
            "range": "stddev: 0.0006053870327354984",
            "extra": "mean: 4.915132974618241 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 827.8180249421706,
            "unit": "iter/sec",
            "range": "stddev: 0.00027343399962689884",
            "extra": "mean: 1.2079949576718356 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3260.992234875413,
            "unit": "iter/sec",
            "range": "stddev: 0.00019469324871959149",
            "extra": "mean: 306.6551307007958 usec\nrounds: 1469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0688878747299597,
            "unit": "iter/sec",
            "range": "stddev: 0.04225373869747706",
            "extra": "mean: 935.5518232000122 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 76.55371621682478,
            "unit": "iter/sec",
            "range": "stddev: 0.0012193734430671216",
            "extra": "mean: 13.062723136361896 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4265967.5577885285,
            "unit": "iter/sec",
            "range": "stddev: 4.884699012680209e-7",
            "extra": "mean: 234.41340949123182 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3700.6365507639366,
            "unit": "iter/sec",
            "range": "stddev: 0.0001667356285944761",
            "extra": "mean: 270.2237807691669 usec\nrounds: 1560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3379.1635155976724,
            "unit": "iter/sec",
            "range": "stddev: 0.00023218541785729926",
            "extra": "mean: 295.9312254006537 usec\nrounds: 2622"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 86.45404367751655,
            "unit": "iter/sec",
            "range": "stddev: 0.0012202577556003904",
            "extra": "mean: 11.566838952381616 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 122.9123908455796,
            "unit": "iter/sec",
            "range": "stddev: 0.00045611417114180063",
            "extra": "mean: 8.135876237704508 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8155.397987051673,
            "unit": "iter/sec",
            "range": "stddev: 0.0000708237938792854",
            "extra": "mean: 122.61817284548223 usec\nrounds: 5988"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1532064.45134161,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012496981061093212",
            "extra": "mean: 652.7140546367434 nsec\nrounds: 172414"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 201.74680857376515,
            "unit": "iter/sec",
            "range": "stddev: 0.0005498413255684215",
            "extra": "mean: 4.956707900706978 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 71.57695480853062,
            "unit": "iter/sec",
            "range": "stddev: 0.002051859080006409",
            "extra": "mean: 13.970977148650908 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 75.12813119419532,
            "unit": "iter/sec",
            "range": "stddev: 0.0022115677586711647",
            "extra": "mean: 13.310593303793823 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5606802917254644,
            "unit": "iter/sec",
            "range": "stddev: 0.03764137836451972",
            "extra": "mean: 1.783547620200011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 381.62407026538915,
            "unit": "iter/sec",
            "range": "stddev: 0.0003109423554814859",
            "extra": "mean: 2.620379787115052 msec\nrounds: 357"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 72.68493729542995,
            "unit": "iter/sec",
            "range": "stddev: 0.023817974550474706",
            "extra": "mean: 13.758008704547303 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 71.57256883752439,
            "unit": "iter/sec",
            "range": "stddev: 0.0010559347257182168",
            "extra": "mean: 13.971833290909009 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3888.4405427839597,
            "unit": "iter/sec",
            "range": "stddev: 0.00010032092577965849",
            "extra": "mean: 257.17250630352754 usec\nrounds: 1983"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 87.1884354801313,
            "unit": "iter/sec",
            "range": "stddev: 0.0015065109608834845",
            "extra": "mean: 11.469410988890633 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5786.258137475589,
            "unit": "iter/sec",
            "range": "stddev: 0.00012145380199482518",
            "extra": "mean: 172.8232609470612 usec\nrounds: 3905"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.641500386873,
            "unit": "iter/sec",
            "range": "stddev: 0.0004035407606686145",
            "extra": "mean: 3.7786968352965205 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 78.13552741294079,
            "unit": "iter/sec",
            "range": "stddev: 0.0018262838820220762",
            "extra": "mean: 12.79827542105232 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 71.91412117745813,
            "unit": "iter/sec",
            "range": "stddev: 0.000601185134687162",
            "extra": "mean: 13.905474802818775 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 121.79375535970834,
            "unit": "iter/sec",
            "range": "stddev: 0.000526155715563477",
            "extra": "mean: 8.210601578435432 msec\nrounds: 102"
          }
        ]
      }
    ]
  }
}