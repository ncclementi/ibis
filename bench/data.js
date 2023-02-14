window.BENCHMARK_DATA = {
  "lastUpdate": 1676380921734,
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
          "id": "6d8fc4a9fc4561431c6f92da1d48db0ba2f68f70",
          "message": "feat(polars): implement ops.Pi, ops.E",
          "timestamp": "2023-02-14T08:14:43-05:00",
          "tree_id": "f45dd79d998e3b43422921c706523d667b524c96",
          "url": "https://github.com/ibis-project/ibis/commit/6d8fc4a9fc4561431c6f92da1d48db0ba2f68f70"
        },
        "date": 1676380828557,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3645.543045029384,
            "unit": "iter/sec",
            "range": "stddev: 0.00006740319574617811",
            "extra": "mean: 274.3075551839876 usec\nrounds: 299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 59.68961097752931,
            "unit": "iter/sec",
            "range": "stddev: 0.010919610503330493",
            "extra": "mean: 16.753334183673253 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.5340217618223173,
            "unit": "iter/sec",
            "range": "stddev: 0.01694987517848518",
            "extra": "mean: 651.8812346000004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 36.121426168676585,
            "unit": "iter/sec",
            "range": "stddev: 0.0032308669714083567",
            "extra": "mean: 27.68439970587789 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 302.0873267602542,
            "unit": "iter/sec",
            "range": "stddev: 0.0004963370918881295",
            "extra": "mean: 3.3103010666635173 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 4209171.443754137,
            "unit": "iter/sec",
            "range": "stddev: 4.079400382650622e-7",
            "extra": "mean: 237.57644785019974 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 174.50290639655444,
            "unit": "iter/sec",
            "range": "stddev: 0.0003846918219426962",
            "extra": "mean: 5.730563579998602 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 112.21917377203722,
            "unit": "iter/sec",
            "range": "stddev: 0.0012402114716719933",
            "extra": "mean: 8.911133154762007 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1101.3049956423135,
            "unit": "iter/sec",
            "range": "stddev: 0.00017822866831139917",
            "extra": "mean: 908.0136782788046 usec\nrounds: 976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 187.44088620831147,
            "unit": "iter/sec",
            "range": "stddev: 0.0003796009174205932",
            "extra": "mean: 5.33501532258365 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 86.99779557371728,
            "unit": "iter/sec",
            "range": "stddev: 0.0009308142635704846",
            "extra": "mean: 11.494544125002035 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 63.394417573831156,
            "unit": "iter/sec",
            "range": "stddev: 0.00036057240750999225",
            "extra": "mean: 15.774259599993457 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1520.6172378197707,
            "unit": "iter/sec",
            "range": "stddev: 0.006515632924321748",
            "extra": "mean: 657.6276890256611 usec\nrounds: 328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3554.9823552104817,
            "unit": "iter/sec",
            "range": "stddev: 0.00010193090251179212",
            "extra": "mean: 281.2953483536468 usec\nrounds: 2308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5683636376449126,
            "unit": "iter/sec",
            "range": "stddev: 0.035121399524600735",
            "extra": "mean: 1.7594369762000042 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5591007325416075,
            "unit": "iter/sec",
            "range": "stddev: 0.034015953215923676",
            "extra": "mean: 1.788586459999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2702.517559352267,
            "unit": "iter/sec",
            "range": "stddev: 0.00025252378909498396",
            "extra": "mean: 370.02534786108015 usec\nrounds: 1262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 103.16438390433872,
            "unit": "iter/sec",
            "range": "stddev: 0.0013913886568353091",
            "extra": "mean: 9.693267794118466 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08731857183450119,
            "unit": "iter/sec",
            "range": "stddev: 0.31218566265065734",
            "extra": "mean: 11.452317404999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 42.48945495224592,
            "unit": "iter/sec",
            "range": "stddev: 0.003725487165342323",
            "extra": "mean: 23.535251302326756 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 116.68000000853195,
            "unit": "iter/sec",
            "range": "stddev: 0.00042347875592903885",
            "extra": "mean: 8.570449090905703 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 0.9491751557792074,
            "unit": "iter/sec",
            "range": "stddev: 0.053470987019895964",
            "extra": "mean: 1.0535463279999875 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6344.051960126569,
            "unit": "iter/sec",
            "range": "stddev: 0.00007004103752490011",
            "extra": "mean: 157.62796494813847 usec\nrounds: 3452"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 740.5905170370983,
            "unit": "iter/sec",
            "range": "stddev: 0.0001777776267851704",
            "extra": "mean: 1.35027383823483 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 209.40212279775793,
            "unit": "iter/sec",
            "range": "stddev: 0.000591840164157917",
            "extra": "mean: 4.775500776397607 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 57.24462105003768,
            "unit": "iter/sec",
            "range": "stddev: 0.0031484813398968896",
            "extra": "mean: 17.46889020587449 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 163.76353605286636,
            "unit": "iter/sec",
            "range": "stddev: 0.0009955241468644577",
            "extra": "mean: 6.1063654590187815 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8425156.63966626,
            "unit": "iter/sec",
            "range": "stddev: 2.126798777284807e-7",
            "extra": "mean: 118.69215526414024 nsec\nrounds: 84746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 62.84045386894223,
            "unit": "iter/sec",
            "range": "stddev: 0.0013653835261443136",
            "extra": "mean: 15.913316000001586 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 113.30766722389366,
            "unit": "iter/sec",
            "range": "stddev: 0.001420644427117563",
            "extra": "mean: 8.825528090910389 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 171.9501923805484,
            "unit": "iter/sec",
            "range": "stddev: 0.0008789238791612846",
            "extra": "mean: 5.815637575949135 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 9.830676731189499,
            "unit": "iter/sec",
            "range": "stddev: 0.004521698080988316",
            "extra": "mean: 101.72239687501161 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 99839.0772202527,
            "unit": "iter/sec",
            "range": "stddev: 0.000011415355732834425",
            "extra": "mean: 10.01611821585573 usec\nrounds: 31747"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 44184.2348224423,
            "unit": "iter/sec",
            "range": "stddev: 0.00005238995007180834",
            "extra": "mean: 22.632506911539284 usec\nrounds: 9911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 6.036629935848739,
            "unit": "iter/sec",
            "range": "stddev: 0.004851458918597014",
            "extra": "mean: 165.65534257143457 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 219.73547298316157,
            "unit": "iter/sec",
            "range": "stddev: 0.0002952753314804306",
            "extra": "mean: 4.550926559211632 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.08173867605292,
            "unit": "iter/sec",
            "range": "stddev: 0.001820956795270422",
            "extra": "mean: 34.38583955172668 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8133.002709385267,
            "unit": "iter/sec",
            "range": "stddev: 0.00003374414482718468",
            "extra": "mean: 122.95581788581318 usec\nrounds: 4607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 109.32441602328679,
            "unit": "iter/sec",
            "range": "stddev: 0.0017284922446123125",
            "extra": "mean: 9.147087506847452 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 74.12702332059105,
            "unit": "iter/sec",
            "range": "stddev: 0.0015876765260613888",
            "extra": "mean: 13.490356892858253 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 322831.0603926268,
            "unit": "iter/sec",
            "range": "stddev: 0.000001171652879482153",
            "extra": "mean: 3.0975953763054926 usec\nrounds: 1557"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 79.21145719769206,
            "unit": "iter/sec",
            "range": "stddev: 0.00217889010485894",
            "extra": "mean: 12.624436355264228 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.1098944662901,
            "unit": "iter/sec",
            "range": "stddev: 0.0020446112231180774",
            "extra": "mean: 10.51415318681098 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1060963.1146986554,
            "unit": "iter/sec",
            "range": "stddev: 0.000008573842208527654",
            "extra": "mean: 942.5398358773568 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7596.925591972968,
            "unit": "iter/sec",
            "range": "stddev: 0.00005172153183690505",
            "extra": "mean: 131.63219619481544 usec\nrounds: 3206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3510.931842489407,
            "unit": "iter/sec",
            "range": "stddev: 0.0002095114127188027",
            "extra": "mean: 284.82466902318316 usec\nrounds: 2121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 95.62880674886978,
            "unit": "iter/sec",
            "range": "stddev: 0.016428389207049796",
            "extra": "mean: 10.457100051724936 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 472361.0320198831,
            "unit": "iter/sec",
            "range": "stddev: 0.000008011748966123831",
            "extra": "mean: 2.1170247590574047 usec\nrounds: 17731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2952.3040739871935,
            "unit": "iter/sec",
            "range": "stddev: 0.00014502298792891985",
            "extra": "mean: 338.71849746474925 usec\nrounds: 1578"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 25.204807262478777,
            "unit": "iter/sec",
            "range": "stddev: 0.005208075582527628",
            "extra": "mean: 39.67497111111234 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3465161.2203163295,
            "unit": "iter/sec",
            "range": "stddev: 9.698355937265487e-7",
            "extra": "mean: 288.58686116403845 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 457.70171211079276,
            "unit": "iter/sec",
            "range": "stddev: 0.00042662038106794825",
            "extra": "mean: 2.1848290568726054 msec\nrounds: 422"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 168.3639734091238,
            "unit": "iter/sec",
            "range": "stddev: 0.0005268793288687603",
            "extra": "mean: 5.939512947761122 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.965055810825845,
            "unit": "iter/sec",
            "range": "stddev: 0.004257280619020267",
            "extra": "mean: 37.08503357143148 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 52.669927002628555,
            "unit": "iter/sec",
            "range": "stddev: 0.003928195371680406",
            "extra": "mean: 18.986166431369725 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11904.692335495994,
            "unit": "iter/sec",
            "range": "stddev: 0.00004923299082546889",
            "extra": "mean: 84.0004908836089 usec\nrounds: 4936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.4788310211860386,
            "unit": "iter/sec",
            "range": "stddev: 0.10673839923705622",
            "extra": "mean: 2.0884194125999898 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 150.9666432548981,
            "unit": "iter/sec",
            "range": "stddev: 0.01361132831866407",
            "extra": "mean: 6.623979830508387 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 46.98651811242812,
            "unit": "iter/sec",
            "range": "stddev: 0.0022853849630520705",
            "extra": "mean: 21.282700659095998 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 102.5553111071271,
            "unit": "iter/sec",
            "range": "stddev: 0.0016962803258548007",
            "extra": "mean: 9.750835809521568 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.65710645961296,
            "unit": "iter/sec",
            "range": "stddev: 0.008202204910341307",
            "extra": "mean: 273.440221400017 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 63.62266753448649,
            "unit": "iter/sec",
            "range": "stddev: 0.0017568896039895723",
            "extra": "mean: 15.717668540979563 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 392.5760712364958,
            "unit": "iter/sec",
            "range": "stddev: 0.0004281612869430986",
            "extra": "mean: 2.5472770076135887 msec\nrounds: 394"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.57829362696743,
            "unit": "iter/sec",
            "range": "stddev: 0.0008622424021564655",
            "extra": "mean: 17.67462282608256 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 60.73789966311243,
            "unit": "iter/sec",
            "range": "stddev: 0.001425948089079706",
            "extra": "mean: 16.464184727272087 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 110.85396016551772,
            "unit": "iter/sec",
            "range": "stddev: 0.00146286184336058",
            "extra": "mean: 9.020877544716354 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.41400011922276203,
            "unit": "iter/sec",
            "range": "stddev: 0.04683721872558137",
            "extra": "mean: 2.4154582415999926 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 122.347032460791,
            "unit": "iter/sec",
            "range": "stddev: 0.0009060267797155844",
            "extra": "mean: 8.173471639538732 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1234638.9612633819,
            "unit": "iter/sec",
            "range": "stddev: 0.000005811665017635373",
            "extra": "mean: 809.9533801984669 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 154.23018662813845,
            "unit": "iter/sec",
            "range": "stddev: 0.0007296004979351583",
            "extra": "mean: 6.4838150161296335 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1663460.6133143257,
            "unit": "iter/sec",
            "range": "stddev: 9.975045098672594e-7",
            "extra": "mean: 601.1564037019884 nsec\nrounds: 78119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 108.85904035650269,
            "unit": "iter/sec",
            "range": "stddev: 0.001079678277846152",
            "extra": "mean: 9.186191580645005 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 180.9899832396966,
            "unit": "iter/sec",
            "range": "stddev: 0.0006355910402531654",
            "extra": "mean: 5.525167647955611 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 26.938340978269164,
            "unit": "iter/sec",
            "range": "stddev: 0.0023973532262095503",
            "extra": "mean: 37.12181090909377 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2695.4917613396146,
            "unit": "iter/sec",
            "range": "stddev: 0.00012440853980608382",
            "extra": "mean: 370.98981875686263 usec\nrounds: 1898"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 66.08262194730933,
            "unit": "iter/sec",
            "range": "stddev: 0.0017070119769303262",
            "extra": "mean: 15.132571476920894 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3090.7625650553564,
            "unit": "iter/sec",
            "range": "stddev: 0.00018772752654994644",
            "extra": "mean: 323.54474954050363 usec\nrounds: 2719"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 175.57271737790904,
            "unit": "iter/sec",
            "range": "stddev: 0.0006774302405917445",
            "extra": "mean: 5.695645741174945 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3536722.5867748135,
            "unit": "iter/sec",
            "range": "stddev: 5.270419615900931e-7",
            "extra": "mean: 282.7476499683213 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1395723.636257696,
            "unit": "iter/sec",
            "range": "stddev: 0.000003041539142178145",
            "extra": "mean: 716.4742174040016 nsec\nrounds: 119034"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 71.46109582642357,
            "unit": "iter/sec",
            "range": "stddev: 0.00111889265734881",
            "extra": "mean: 13.993628119403096 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.222559035523183,
            "unit": "iter/sec",
            "range": "stddev: 0.0034479691920629297",
            "extra": "mean: 52.02220984999997 msec\nrounds: 20"
          }
        ]
      }
    ]
  }
}