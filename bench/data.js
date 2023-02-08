window.BENCHMARK_DATA = {
  "lastUpdate": 1675815429266,
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
          "id": "c15fb5fc27c13cb679199bd1ed2aeca6ed8c697f",
          "message": "refactor(datatype): clean up parsing rules",
          "timestamp": "2023-02-07T19:07:16-05:00",
          "tree_id": "d8ac7f8187936ab9eda6623679416fe7dfecf690",
          "url": "https://github.com/ibis-project/ibis/commit/c15fb5fc27c13cb679199bd1ed2aeca6ed8c697f"
        },
        "date": 1675815355886,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 125595.84887079586,
            "unit": "iter/sec",
            "range": "stddev: 5.188974834890239e-7",
            "extra": "mean: 7.962046588249341 usec\nrounds: 16077"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1498445.771070784,
            "unit": "iter/sec",
            "range": "stddev: 1.37252587562104e-7",
            "extra": "mean: 667.3581515635387 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4563.047447124496,
            "unit": "iter/sec",
            "range": "stddev: 0.000040172311873522756",
            "extra": "mean: 219.15178651718205 usec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 90.70231112838178,
            "unit": "iter/sec",
            "range": "stddev: 0.000652032414496367",
            "extra": "mean: 11.025077393944029 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 122.32999107762825,
            "unit": "iter/sec",
            "range": "stddev: 0.012801109780122092",
            "extra": "mean: 8.174610258619404 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1695251.1025217948,
            "unit": "iter/sec",
            "range": "stddev: 2.2949683757585251e-7",
            "extra": "mean: 589.8831143731072 nsec\nrounds: 108696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 619158.6177107263,
            "unit": "iter/sec",
            "range": "stddev: 5.499401326539549e-7",
            "extra": "mean: 1.61509501991169 usec\nrounds: 20080"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 88.71777983293329,
            "unit": "iter/sec",
            "range": "stddev: 0.000344846120486095",
            "extra": "mean: 11.271697757576053 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.580878950275554,
            "unit": "iter/sec",
            "range": "stddev: 0.0011924928067778204",
            "extra": "mean: 44.28525577777817 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 8.945794185705344,
            "unit": "iter/sec",
            "range": "stddev: 0.0031607827711865382",
            "extra": "mean: 111.78437366666888 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.41678925866907,
            "unit": "iter/sec",
            "range": "stddev: 0.00016181194555834678",
            "extra": "mean: 14.83310034482858 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.43132592189787,
            "unit": "iter/sec",
            "range": "stddev: 0.00037719209313259055",
            "extra": "mean: 11.43754814942755 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 84.99995496637582,
            "unit": "iter/sec",
            "range": "stddev: 0.0007303004271885774",
            "extra": "mean: 11.764712115383812 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 617.4054430220614,
            "unit": "iter/sec",
            "range": "stddev: 0.000051584302949450356",
            "extra": "mean: 1.6196812180748261 msec\nrounds: 509"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 74.44265634293924,
            "unit": "iter/sec",
            "range": "stddev: 0.016116587698469687",
            "extra": "mean: 13.433158475608968 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.912852062330174,
            "unit": "iter/sec",
            "range": "stddev: 0.0007973370108847468",
            "extra": "mean: 29.48734592307508 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7337831995523414,
            "unit": "iter/sec",
            "range": "stddev: 0.0024908951517828653",
            "extra": "mean: 1.3628003484000033 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.63007361998365,
            "unit": "iter/sec",
            "range": "stddev: 0.0000153112105338247",
            "extra": "mean: 3.7788600000014685 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.000365394052466,
            "unit": "iter/sec",
            "range": "stddev: 0.0006087261311923099",
            "extra": "mean: 18.518393212764053 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4610.9263577973525,
            "unit": "iter/sec",
            "range": "stddev: 0.00005004856179415266",
            "extra": "mean: 216.87615945306527 usec\nrounds: 1756"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 241.97830970205004,
            "unit": "iter/sec",
            "range": "stddev: 0.0002089515911598307",
            "extra": "mean: 4.132601807291358 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 248.3944855438408,
            "unit": "iter/sec",
            "range": "stddev: 0.0002134800843127379",
            "extra": "mean: 4.025854268908492 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10880.548990500709,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016449061441373288",
            "extra": "mean: 91.90712719303527 usec\nrounds: 5244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4339341.808657094,
            "unit": "iter/sec",
            "range": "stddev: 1.0163037546082315e-8",
            "extra": "mean: 230.4496958515373 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5488352610303455,
            "unit": "iter/sec",
            "range": "stddev: 0.0022169657967677204",
            "extra": "mean: 645.6464578000123 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5373690.986837098,
            "unit": "iter/sec",
            "range": "stddev: 4.563960935884571e-9",
            "extra": "mean: 186.0918319363077 nsec\nrounds: 49505"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 395251.55407890235,
            "unit": "iter/sec",
            "range": "stddev: 3.862633374164075e-7",
            "extra": "mean: 2.530034327962122 usec\nrounds: 2010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 117.19010635759773,
            "unit": "iter/sec",
            "range": "stddev: 0.015896626839990827",
            "extra": "mean: 8.533143548385963 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 80.77492066337318,
            "unit": "iter/sec",
            "range": "stddev: 0.0006987594314090221",
            "extra": "mean: 12.380080250000702 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 241.78877550394338,
            "unit": "iter/sec",
            "range": "stddev: 0.00018420903091584243",
            "extra": "mean: 4.135841285087656 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8655200943794666,
            "unit": "iter/sec",
            "range": "stddev: 0.009002666073509706",
            "extra": "mean: 1.1553746776000025 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9524.738361754884,
            "unit": "iter/sec",
            "range": "stddev: 0.000017694444327626305",
            "extra": "mean: 104.98976056028432 usec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5424.743517573147,
            "unit": "iter/sec",
            "range": "stddev: 0.00005107160405200846",
            "extra": "mean: 184.34051246119876 usec\nrounds: 1926"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 947.3554077746409,
            "unit": "iter/sec",
            "range": "stddev: 0.00004740968772858341",
            "extra": "mean: 1.0555700551169307 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 100.6216097592308,
            "unit": "iter/sec",
            "range": "stddev: 0.00011949384452147641",
            "extra": "mean: 9.938223035715867 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.240990196398429,
            "unit": "iter/sec",
            "range": "stddev: 0.0027570483996944327",
            "extra": "mean: 446.2313140000049 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5477794949485381,
            "unit": "iter/sec",
            "range": "stddev: 0.06946543265142735",
            "extra": "mean: 1.8255520866000041 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5250.146010284287,
            "unit": "iter/sec",
            "range": "stddev: 0.00005269124165323708",
            "extra": "mean: 190.4708931982354 usec\nrounds: 1573"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5111.437367159558,
            "unit": "iter/sec",
            "range": "stddev: 0.00005390071933168797",
            "extra": "mean: 195.63968570267411 usec\nrounds: 2504"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 243.5539575159086,
            "unit": "iter/sec",
            "range": "stddev: 0.0002468537748636128",
            "extra": "mean: 4.105866355855381 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.05345054156762,
            "unit": "iter/sec",
            "range": "stddev: 0.0014802100973064264",
            "extra": "mean: 29.365599787878825 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4093.399931652225,
            "unit": "iter/sec",
            "range": "stddev: 0.000038983423860276314",
            "extra": "mean: 244.29569958886688 usec\nrounds: 1215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.090748768506817,
            "unit": "iter/sec",
            "range": "stddev: 0.028234428174099213",
            "extra": "mean: 32.16390854545593 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1516691.8608121413,
            "unit": "iter/sec",
            "range": "stddev: 1.3498945231043952e-7",
            "extra": "mean: 659.3297068690875 nsec\nrounds: 75188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.13850021315856,
            "unit": "iter/sec",
            "range": "stddev: 0.00018723827585337177",
            "extra": "mean: 16.093082333329928 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.79753288089246,
            "unit": "iter/sec",
            "range": "stddev: 0.000869328325916069",
            "extra": "mean: 17.92193934693561 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 243.63249823369384,
            "unit": "iter/sec",
            "range": "stddev: 0.0002494642013224564",
            "extra": "mean: 4.104542732393581 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 128.71209107357612,
            "unit": "iter/sec",
            "range": "stddev: 0.014252207040093197",
            "extra": "mean: 7.769277863944939 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 87.05121634061899,
            "unit": "iter/sec",
            "range": "stddev: 0.0009769899413645641",
            "extra": "mean: 11.487490261906768 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.12820871493597585,
            "unit": "iter/sec",
            "range": "stddev: 0.14878155192667866",
            "extra": "mean: 7.799781789399998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 403.3985304246147,
            "unit": "iter/sec",
            "range": "stddev: 0.00002908088261248333",
            "extra": "mean: 2.478938133332827 msec\nrounds: 345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 120.63447766629037,
            "unit": "iter/sec",
            "range": "stddev: 0.012982935300543053",
            "extra": "mean: 8.28950412307738 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.6825780261585,
            "unit": "iter/sec",
            "range": "stddev: 0.00037671294146538706",
            "extra": "mean: 11.808804400016015 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.74152511322974,
            "unit": "iter/sec",
            "range": "stddev: 0.0008234883984380304",
            "extra": "mean: 11.143113500002013 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5401.180719837381,
            "unit": "iter/sec",
            "range": "stddev: 0.00006175538537680048",
            "extra": "mean: 185.1447029585983 usec\nrounds: 3380"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 167.1795048667998,
            "unit": "iter/sec",
            "range": "stddev: 0.00003998112034462394",
            "extra": "mean: 5.981594459181762 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4685.039594879658,
            "unit": "iter/sec",
            "range": "stddev: 0.00005204395034547092",
            "extra": "mean: 213.44536790957184 usec\nrounds: 1851"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4543677.073223202,
            "unit": "iter/sec",
            "range": "stddev: 1.0255379959176063e-8",
            "extra": "mean: 220.08606331036773 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 137.86859620120617,
            "unit": "iter/sec",
            "range": "stddev: 0.00026392126538190175",
            "extra": "mean: 7.253283398494858 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10749.139596943325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022655497079802227",
            "extra": "mean: 93.03070175815417 usec\nrounds: 5348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.32229972816532,
            "unit": "iter/sec",
            "range": "stddev: 0.00047166626603398833",
            "extra": "mean: 8.451492257143487 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19049.289384673444,
            "unit": "iter/sec",
            "range": "stddev: 0.000014659171503265777",
            "extra": "mean: 52.49539653718388 usec\nrounds: 4794"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 128.33365044989827,
            "unit": "iter/sec",
            "range": "stddev: 0.015574377791325325",
            "extra": "mean: 7.7921885374125015 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.91752282060607,
            "unit": "iter/sec",
            "range": "stddev: 0.0009650183909618164",
            "extra": "mean: 10.998979833328173 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 208.1221735950316,
            "unit": "iter/sec",
            "range": "stddev: 0.00048552784903230597",
            "extra": "mean: 4.804870056497779 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 156.17506508894888,
            "unit": "iter/sec",
            "range": "stddev: 0.0007757003632035097",
            "extra": "mean: 6.4030708066646485 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1438.9360187076682,
            "unit": "iter/sec",
            "range": "stddev: 0.00009191450963807798",
            "extra": "mean: 694.9579321102242 usec\nrounds: 1090"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 271.8949160545653,
            "unit": "iter/sec",
            "range": "stddev: 0.0000425154724820592",
            "extra": "mean: 3.6778914976082704 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 140.8491837838042,
            "unit": "iter/sec",
            "range": "stddev: 0.00010596778173651645",
            "extra": "mean: 7.099792651514015 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8564346342968503,
            "unit": "iter/sec",
            "range": "stddev: 0.009553744990640182",
            "extra": "mean: 1.1676314337999885 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 483.69191166279955,
            "unit": "iter/sec",
            "range": "stddev: 0.00010961772201531809",
            "extra": "mean: 2.0674317181825006 msec\nrounds: 440"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.63176269783363,
            "unit": "iter/sec",
            "range": "stddev: 0.0006777428859857137",
            "extra": "mean: 25.88543545946138 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.800911408094626,
            "unit": "iter/sec",
            "range": "stddev: 0.0029658020612098805",
            "extra": "mean: 208.29378319998568 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 145.279001856159,
            "unit": "iter/sec",
            "range": "stddev: 0.0000724836994549802",
            "extra": "mean: 6.883307203542752 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 261.51059609649536,
            "unit": "iter/sec",
            "range": "stddev: 0.00013446627223636154",
            "extra": "mean: 3.8239368305787798 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1467120.1171424808,
            "unit": "iter/sec",
            "range": "stddev: 9.505293693369284e-8",
            "extra": "mean: 681.6074487123157 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 228.580685689713,
            "unit": "iter/sec",
            "range": "stddev: 0.00035995530740726736",
            "extra": "mean: 4.374822820146102 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10816396.458541704,
            "unit": "iter/sec",
            "range": "stddev: 3.4370121311127065e-9",
            "extra": "mean: 92.45223248185582 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 240.3604507123964,
            "unit": "iter/sec",
            "range": "stddev: 0.00027601381358272205",
            "extra": "mean: 4.160418226193755 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 157.2276412916112,
            "unit": "iter/sec",
            "range": "stddev: 0.0007631425540067443",
            "extra": "mean: 6.360204807405926 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.354959711313088,
            "unit": "iter/sec",
            "range": "stddev: 0.00015969261848411986",
            "extra": "mean: 74.87854861538014 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58869.601789862405,
            "unit": "iter/sec",
            "range": "stddev: 6.632514293527486e-7",
            "extra": "mean: 16.98669550321647 usec\nrounds: 12854"
          }
        ]
      }
    ]
  }
}