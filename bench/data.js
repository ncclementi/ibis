window.BENCHMARK_DATA = {
  "lastUpdate": 1680529376662,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "50b5787ae1d14029c5b7afd50ed5ca86477e935e",
          "message": "chore(deps): lock file maintenance",
          "timestamp": "2023-04-03T09:34:29-04:00",
          "tree_id": "4c1b165be02b401a3a6f70a6eba80f7465871b22",
          "url": "https://github.com/ibis-project/ibis/commit/50b5787ae1d14029c5b7afd50ed5ca86477e935e"
        },
        "date": 1680529281224,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.209324593495798,
            "unit": "iter/sec",
            "range": "stddev: 0.027457283480031312",
            "extra": "mean: 237.56780400000252 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 73.70642745937242,
            "unit": "iter/sec",
            "range": "stddev: 0.011697760291500423",
            "extra": "mean: 13.567337808513486 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 121.04953041758803,
            "unit": "iter/sec",
            "range": "stddev: 0.0005007104820024872",
            "extra": "mean: 8.261081199987075 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 81.34065153103954,
            "unit": "iter/sec",
            "range": "stddev: 0.0010466814246402273",
            "extra": "mean: 12.293975781819261 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 222.3817523862781,
            "unit": "iter/sec",
            "range": "stddev: 0.0009093509246013965",
            "extra": "mean: 4.496771831633899 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 94.11226054289617,
            "unit": "iter/sec",
            "range": "stddev: 0.0010805885261590603",
            "extra": "mean: 10.625608121953485 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3249.5303904073303,
            "unit": "iter/sec",
            "range": "stddev: 0.00029696626006216594",
            "extra": "mean: 307.7367741972862 usec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 227.56759510023622,
            "unit": "iter/sec",
            "range": "stddev: 0.0005164122315463839",
            "extra": "mean: 4.394298755758842 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4588921.181828616,
            "unit": "iter/sec",
            "range": "stddev: 3.0955006774673143e-7",
            "extra": "mean: 217.91614202506184 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3997.132594587081,
            "unit": "iter/sec",
            "range": "stddev: 0.00013111262356391842",
            "extra": "mean: 250.17934139943233 usec\nrounds: 372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 12.30108215276773,
            "unit": "iter/sec",
            "range": "stddev: 0.0033100967264920234",
            "extra": "mean: 81.29366079999727 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.33453061411896,
            "unit": "iter/sec",
            "range": "stddev: 0.0005357961062376162",
            "extra": "mean: 9.966658476192455 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 218.97398027299835,
            "unit": "iter/sec",
            "range": "stddev: 0.0009041347889883629",
            "extra": "mean: 4.566752628569312 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6259889007232656,
            "unit": "iter/sec",
            "range": "stddev: 0.03205901229713739",
            "extra": "mean: 1.5974724133999871 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 129.53075850046207,
            "unit": "iter/sec",
            "range": "stddev: 0.0007953268719831603",
            "extra": "mean: 7.7201740465098325 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0653675188283334,
            "unit": "iter/sec",
            "range": "stddev: 0.006816350387638425",
            "extra": "mean: 484.17533000000503 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.947511052681613,
            "unit": "iter/sec",
            "range": "stddev: 0.004514797143737084",
            "extra": "mean: 125.82555637498416 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 72.82639551463402,
            "unit": "iter/sec",
            "range": "stddev: 0.0010273060570593314",
            "extra": "mean: 13.731285105261817 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.552107366209974,
            "unit": "iter/sec",
            "range": "stddev: 0.0011017665294084762",
            "extra": "mean: 17.682807000000544 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 135.97261389179772,
            "unit": "iter/sec",
            "range": "stddev: 0.0038955895770837667",
            "extra": "mean: 7.354422125000593 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 417430.0646033192,
            "unit": "iter/sec",
            "range": "stddev: 0.000006223342111281827",
            "extra": "mean: 2.39561086945257 usec\nrounds: 1840"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 927.2087248000468,
            "unit": "iter/sec",
            "range": "stddev: 0.0002900406655337614",
            "extra": "mean: 1.078505813473283 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 182.97379246696414,
            "unit": "iter/sec",
            "range": "stddev: 0.01503593099720575",
            "extra": "mean: 5.465263557788198 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 539.8905207408744,
            "unit": "iter/sec",
            "range": "stddev: 0.00025309332470092974",
            "extra": "mean: 1.8522273712598845 msec\nrounds: 334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3678.6403825353104,
            "unit": "iter/sec",
            "range": "stddev: 0.0001079363762897953",
            "extra": "mean: 271.8395646249069 usec\nrounds: 1617"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 421.1575760586409,
            "unit": "iter/sec",
            "range": "stddev: 0.00028092234962845576",
            "extra": "mean: 2.3744081950475526 msec\nrounds: 323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 78.27304265136308,
            "unit": "iter/sec",
            "range": "stddev: 0.0014520242038843698",
            "extra": "mean: 12.775790567566311 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.284798437411267,
            "unit": "iter/sec",
            "range": "stddev: 0.017580091278663904",
            "extra": "mean: 778.3322044000101 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 236.31475242831397,
            "unit": "iter/sec",
            "range": "stddev: 0.0006223365507581769",
            "extra": "mean: 4.231644405286758 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 74.21127207739613,
            "unit": "iter/sec",
            "range": "stddev: 0.0009386101825405316",
            "extra": "mean: 13.475041890631978 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 234.48772814324917,
            "unit": "iter/sec",
            "range": "stddev: 0.0006541962652946334",
            "extra": "mean: 4.264615500002189 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3678.696277654554,
            "unit": "iter/sec",
            "range": "stddev: 0.00013165071132318346",
            "extra": "mean: 271.83543422007523 usec\nrounds: 2858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 135.07268531336732,
            "unit": "iter/sec",
            "range": "stddev: 0.0005022214465906091",
            "extra": "mean: 7.403421333336269 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6399.4563901398915,
            "unit": "iter/sec",
            "range": "stddev: 0.00008200650206601497",
            "extra": "mean: 156.26327285248365 usec\nrounds: 4343"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3883.7583689967323,
            "unit": "iter/sec",
            "range": "stddev: 0.00008955796487959411",
            "extra": "mean: 257.4825478286189 usec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10333.237362601165,
            "unit": "iter/sec",
            "range": "stddev: 0.00002796739903687817",
            "extra": "mean: 96.77509234610983 usec\nrounds: 1202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 290.74667665603266,
            "unit": "iter/sec",
            "range": "stddev: 0.0002946323651639418",
            "extra": "mean: 3.4394202248545325 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1349019.4752300573,
            "unit": "iter/sec",
            "range": "stddev: 0.000002059015314001239",
            "extra": "mean: 741.2791426376282 nsec\nrounds: 102041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.2517340834459,
            "unit": "iter/sec",
            "range": "stddev: 0.0014597929889878583",
            "extra": "mean: 10.498496532608462 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2249653.889146071,
            "unit": "iter/sec",
            "range": "stddev: 3.277461452518763e-7",
            "extra": "mean: 444.51282253890736 nsec\nrounds: 39840"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 88.65594916716564,
            "unit": "iter/sec",
            "range": "stddev: 0.0013747178702437272",
            "extra": "mean: 11.27955889473864 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 596011.0268105374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046023369796981605",
            "extra": "mean: 1.6778213070173351 usec\nrounds: 18182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 81.67599064012539,
            "unit": "iter/sec",
            "range": "stddev: 0.001301534471953352",
            "extra": "mean: 12.243500105265019 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 210.54991222280026,
            "unit": "iter/sec",
            "range": "stddev: 0.0006534186899635015",
            "extra": "mean: 4.749467665138788 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5175965175233436,
            "unit": "iter/sec",
            "range": "stddev: 0.0351366040810639",
            "extra": "mean: 1.9320068163999964 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1394.4119604747716,
            "unit": "iter/sec",
            "range": "stddev: 0.0002373126339009513",
            "extra": "mean: 717.1481802691353 usec\nrounds: 1409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.07333221484784,
            "unit": "iter/sec",
            "range": "stddev: 0.00046060525678242394",
            "extra": "mean: 11.10206512194692 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 27.927032462843844,
            "unit": "iter/sec",
            "range": "stddev: 0.0426311195096778",
            "extra": "mean: 35.80759972727044 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.73153770702666,
            "unit": "iter/sec",
            "range": "stddev: 0.0014656053387512751",
            "extra": "mean: 19.330567857142405 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 178.212594558631,
            "unit": "iter/sec",
            "range": "stddev: 0.004620856814982769",
            "extra": "mean: 5.611275692813088 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.824610104436182,
            "unit": "iter/sec",
            "range": "stddev: 0.0027269527423149534",
            "extra": "mean: 34.69257680769452 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.30567312777309,
            "unit": "iter/sec",
            "range": "stddev: 0.0009278677849740064",
            "extra": "mean: 30.95431554838283 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3923.920592829411,
            "unit": "iter/sec",
            "range": "stddev: 0.0000706479197530021",
            "extra": "mean: 254.84715512016328 usec\nrounds: 1992"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 54356.259387191225,
            "unit": "iter/sec",
            "range": "stddev: 0.000042938003568772625",
            "extra": "mean: 18.397145264849566 usec\nrounds: 9672"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 82.64894299448545,
            "unit": "iter/sec",
            "range": "stddev: 0.0009409661571725627",
            "extra": "mean: 12.099368289159154 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 76.50632721267785,
            "unit": "iter/sec",
            "range": "stddev: 0.0011869975750192514",
            "extra": "mean: 13.070814355264073 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3485.3448357604852,
            "unit": "iter/sec",
            "range": "stddev: 0.0001900852231485413",
            "extra": "mean: 286.91565601766484 usec\nrounds: 1346"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 32.886965916169636,
            "unit": "iter/sec",
            "range": "stddev: 0.0017621063874513011",
            "extra": "mean: 30.407183275862092 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1462436.542077563,
            "unit": "iter/sec",
            "range": "stddev: 0.000012646987753553099",
            "extra": "mean: 683.790353446299 nsec\nrounds: 86207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 127637.89608453134,
            "unit": "iter/sec",
            "range": "stddev: 0.000007439816537292711",
            "extra": "mean: 7.834663768961887 usec\nrounds: 28986"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1619650.740874522,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014038843734461646",
            "extra": "mean: 617.4170608288397 nsec\nrounds: 149254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 91.76337260144143,
            "unit": "iter/sec",
            "range": "stddev: 0.0012182747254076416",
            "extra": "mean: 10.897594232323277 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 96.28872708531546,
            "unit": "iter/sec",
            "range": "stddev: 0.0011297619267870533",
            "extra": "mean: 10.38543171428533 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 91.58843808772899,
            "unit": "iter/sec",
            "range": "stddev: 0.0013256216174342477",
            "extra": "mean: 10.918408708336516 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 141.85739243472904,
            "unit": "iter/sec",
            "range": "stddev: 0.0004236137048125421",
            "extra": "mean: 7.049333015620718 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 77.93284228965592,
            "unit": "iter/sec",
            "range": "stddev: 0.001434573619321724",
            "extra": "mean: 12.831560746665218 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 193.77523971191087,
            "unit": "iter/sec",
            "range": "stddev: 0.0008692476887680751",
            "extra": "mean: 5.160618051546307 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9966370.189561887,
            "unit": "iter/sec",
            "range": "stddev: 1.495823281494263e-7",
            "extra": "mean: 100.33743288477348 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 55.160077934573486,
            "unit": "iter/sec",
            "range": "stddev: 0.0014933907217134276",
            "extra": "mean: 18.129053428570582 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 65.17822979783767,
            "unit": "iter/sec",
            "range": "stddev: 0.027998574644618583",
            "extra": "mean: 15.342546170733462 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 68.99320276456942,
            "unit": "iter/sec",
            "range": "stddev: 0.0007837190936045758",
            "extra": "mean: 14.494181454546668 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 209.4529097537548,
            "unit": "iter/sec",
            "range": "stddev: 0.0008166583836464469",
            "extra": "mean: 4.774342839999974 msec\nrounds: 200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 35.796122493686745,
            "unit": "iter/sec",
            "range": "stddev: 0.0016327791523938042",
            "extra": "mean: 27.935986647055618 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4792971.346970487,
            "unit": "iter/sec",
            "range": "stddev: 3.316835153314762e-7",
            "extra": "mean: 208.63884375841948 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10014.228059968078,
            "unit": "iter/sec",
            "range": "stddev: 0.00007100858618819421",
            "extra": "mean: 99.85792155038935 usec\nrounds: 4385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5663098843983759,
            "unit": "iter/sec",
            "range": "stddev: 0.018045960230055707",
            "extra": "mean: 1.7658176690000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 604.843307872295,
            "unit": "iter/sec",
            "range": "stddev: 0.00023883435493136446",
            "extra": "mean: 1.6533207642121046 msec\nrounds: 598"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 218.83813613102728,
            "unit": "iter/sec",
            "range": "stddev: 0.000782661111691187",
            "extra": "mean: 4.569587447963181 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 92.95113742967999,
            "unit": "iter/sec",
            "range": "stddev: 0.0013481566415146206",
            "extra": "mean: 10.758340647057995 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4002.7121965957035,
            "unit": "iter/sec",
            "range": "stddev: 0.00016229256198252648",
            "extra": "mean: 249.83060257255005 usec\nrounds: 3032"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 96.17981117521933,
            "unit": "iter/sec",
            "range": "stddev: 0.0013028752489499427",
            "extra": "mean: 10.397192381446985 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8844.43632870657,
            "unit": "iter/sec",
            "range": "stddev: 0.000040925884445292115",
            "extra": "mean: 113.06543038297188 usec\nrounds: 3706"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.978001654582368,
            "unit": "iter/sec",
            "range": "stddev: 0.0036866510492270183",
            "extra": "mean: 50.05505642105247 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5655872391035263,
            "unit": "iter/sec",
            "range": "stddev: 0.011479655758851365",
            "extra": "mean: 1.7680738369999858 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3748.474199639729,
            "unit": "iter/sec",
            "range": "stddev: 0.00008458670465053613",
            "extra": "mean: 266.77521219063254 usec\nrounds: 1329"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09875753238962509,
            "unit": "iter/sec",
            "range": "stddev: 0.2231383501509732",
            "extra": "mean: 10.125809908400004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 103.82278120456249,
            "unit": "iter/sec",
            "range": "stddev: 0.0006589709684761905",
            "extra": "mean: 9.63179745714667 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5013448.606026317,
            "unit": "iter/sec",
            "range": "stddev: 5.303293162751733e-7",
            "extra": "mean: 199.46349879755553 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}