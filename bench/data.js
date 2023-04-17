window.BENCHMARK_DATA = {
  "lastUpdate": 1681741516722,
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
          "id": "dbcbeadce141f2ebe9a3d0de156db7177bf0e1f9",
          "message": "chore(flake/nixpkgs): `10193ca1` -> `9a60b3ee`",
          "timestamp": "2023-04-17T14:12:22Z",
          "tree_id": "5c8ba7724986cdcf5dd696e6be041be2f0c433cd",
          "url": "https://github.com/ibis-project/ibis/commit/dbcbeadce141f2ebe9a3d0de156db7177bf0e1f9"
        },
        "date": 1681741423563,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1144.701850730581,
            "unit": "iter/sec",
            "range": "stddev: 0.00011021050675022939",
            "extra": "mean: 873.5899215693343 usec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 98.55956260659258,
            "unit": "iter/sec",
            "range": "stddev: 0.0006366576450024363",
            "extra": "mean: 10.146148923078831 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 86.34381402176105,
            "unit": "iter/sec",
            "range": "stddev: 0.00876588172020871",
            "extra": "mean: 11.581605600002476 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.89927499066957,
            "unit": "iter/sec",
            "range": "stddev: 0.00036831402804697534",
            "extra": "mean: 11.778663600011896 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 86.96629389370953,
            "unit": "iter/sec",
            "range": "stddev: 0.012145773831323665",
            "extra": "mean: 11.498707777776561 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2166.4138371416884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000817846297096885",
            "extra": "mean: 461.592325000737 usec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 276.14652116740007,
            "unit": "iter/sec",
            "range": "stddev: 0.0004005841526719364",
            "extra": "mean: 3.621265970588852 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 204.93808910136195,
            "unit": "iter/sec",
            "range": "stddev: 0.004097975423338414",
            "extra": "mean: 4.87952241764781 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 86.90050449846373,
            "unit": "iter/sec",
            "range": "stddev: 0.0009734100123419991",
            "extra": "mean: 11.507413055555718 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1977.322188372007,
            "unit": "iter/sec",
            "range": "stddev: 0.00012469093113240282",
            "extra": "mean: 505.7344755855555 usec\nrounds: 1495"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 11.130649286028925,
            "unit": "iter/sec",
            "range": "stddev: 0.0019216246438922902",
            "extra": "mean: 89.84201858333545 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5231175.0919910045,
            "unit": "iter/sec",
            "range": "stddev: 5.5064719915712956e-8",
            "extra": "mean: 191.16163814322655 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4145.005370534397,
            "unit": "iter/sec",
            "range": "stddev: 0.00004377304478965416",
            "extra": "mean: 241.2542109375058 usec\nrounds: 896"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 95.41984298750405,
            "unit": "iter/sec",
            "range": "stddev: 0.0010616053652729978",
            "extra": "mean: 10.480000476745255 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 96.3208622235231,
            "unit": "iter/sec",
            "range": "stddev: 0.0009279260320830472",
            "extra": "mean: 10.381966864866625 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 286.7148613471499,
            "unit": "iter/sec",
            "range": "stddev: 0.000276202892903602",
            "extra": "mean: 3.487785723074939 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6605419.772915463,
            "unit": "iter/sec",
            "range": "stddev: 2.937700591504081e-8",
            "extra": "mean: 151.39083273715403 nsec\nrounds: 74069"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 112.38284640144494,
            "unit": "iter/sec",
            "range": "stddev: 0.0004863294352125912",
            "extra": "mean: 8.8981551190462 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2125.560919341287,
            "unit": "iter/sec",
            "range": "stddev: 0.00010142377842572486",
            "extra": "mean: 470.46405064217157 usec\nrounds: 1402"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 85.0604951038497,
            "unit": "iter/sec",
            "range": "stddev: 0.0009085208358672887",
            "extra": "mean: 11.75633881250171 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2189.46117879785,
            "unit": "iter/sec",
            "range": "stddev: 0.00010298338764880834",
            "extra": "mean: 456.73337791221394 usec\nrounds: 1159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 103.63028579436512,
            "unit": "iter/sec",
            "range": "stddev: 0.00041724263637020335",
            "extra": "mean: 9.64968872115544 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.976993939567414,
            "unit": "iter/sec",
            "range": "stddev: 0.025167808404464694",
            "extra": "mean: 29.43167961764459 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.12733325942677,
            "unit": "iter/sec",
            "range": "stddev: 0.001083170101027441",
            "extra": "mean: 21.679120151513114 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.258987849987875,
            "unit": "iter/sec",
            "range": "stddev: 0.0023083191681645557",
            "extra": "mean: 70.13120499999938 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6734143558506056,
            "unit": "iter/sec",
            "range": "stddev: 0.012188711313557263",
            "extra": "mean: 597.5806269999964 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1668.6180820184916,
            "unit": "iter/sec",
            "range": "stddev: 0.00007274180072196531",
            "extra": "mean: 599.2983120441326 usec\nrounds: 1096"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 273.2830136684268,
            "unit": "iter/sec",
            "range": "stddev: 0.0003899992236646015",
            "extra": "mean: 3.6592102325587494 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13378.827954343707,
            "unit": "iter/sec",
            "range": "stddev: 0.000009509262594891974",
            "extra": "mean: 74.7449629678009 usec\nrounds: 7912"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.77348050595193,
            "unit": "iter/sec",
            "range": "stddev: 0.0010863243698200967",
            "extra": "mean: 42.06367678260824 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5459846.85507485,
            "unit": "iter/sec",
            "range": "stddev: 4.180076636256213e-8",
            "extra": "mean: 183.15532038608117 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 393896.5644266972,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010542633724957675",
            "extra": "mean: 2.538737552726476 usec\nrounds: 2149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.7889340520329,
            "unit": "iter/sec",
            "range": "stddev: 0.0004136750113479705",
            "extra": "mean: 6.906605166667153 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.0171495878684,
            "unit": "iter/sec",
            "range": "stddev: 0.0007059533918808049",
            "extra": "mean: 13.88558149999947 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 709.908602590115,
            "unit": "iter/sec",
            "range": "stddev: 0.0001320360415606364",
            "extra": "mean: 1.4086320356613244 msec\nrounds: 673"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 96.54970484056079,
            "unit": "iter/sec",
            "range": "stddev: 0.0008397277286261092",
            "extra": "mean: 10.357359472526294 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1762470.1954191402,
            "unit": "iter/sec",
            "range": "stddev: 3.840096867216176e-7",
            "extra": "mean: 567.3854812405415 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 257.85674683692446,
            "unit": "iter/sec",
            "range": "stddev: 0.00036180719014831123",
            "extra": "mean: 3.8781222995589366 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.91456664747885,
            "unit": "iter/sec",
            "range": "stddev: 0.0008743026765811724",
            "extra": "mean: 17.266813133333397 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 100.87390158575629,
            "unit": "iter/sec",
            "range": "stddev: 0.016123372138124016",
            "extra": "mean: 9.91336692920385 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 152363.8058096321,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014278803013195694",
            "extra": "mean: 6.563238524308259 usec\nrounds: 38168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 253.08001455723712,
            "unit": "iter/sec",
            "range": "stddev: 0.00032046032802979604",
            "extra": "mean: 3.951319513512347 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 605.6941631482536,
            "unit": "iter/sec",
            "range": "stddev: 0.00012978731667077933",
            "extra": "mean: 1.6509982443981943 msec\nrounds: 491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1531257.5047703367,
            "unit": "iter/sec",
            "range": "stddev: 3.974466184231504e-7",
            "extra": "mean: 653.0580238037647 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 261.06242918300705,
            "unit": "iter/sec",
            "range": "stddev: 0.00017892542149212245",
            "extra": "mean: 3.83050139818852 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8359835371326965,
            "unit": "iter/sec",
            "range": "stddev: 0.020224352391518957",
            "extra": "mean: 1.1961958048000043 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 88.60852992495305,
            "unit": "iter/sec",
            "range": "stddev: 0.0008575949983285447",
            "extra": "mean: 11.285595199998797 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 142.19231729408526,
            "unit": "iter/sec",
            "range": "stddev: 0.004245230181185778",
            "extra": "mean: 7.032728765027284 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.79095981683845,
            "unit": "iter/sec",
            "range": "stddev: 0.0009752779380014358",
            "extra": "mean: 11.390694464285815 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 252.94393008762538,
            "unit": "iter/sec",
            "range": "stddev: 0.00033578054552287436",
            "extra": "mean: 3.9534453333336677 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.77558172239041,
            "unit": "iter/sec",
            "range": "stddev: 0.0007675977148727239",
            "extra": "mean: 14.540044227273214 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4692101470333987,
            "unit": "iter/sec",
            "range": "stddev: 0.015981498383292717",
            "extra": "mean: 404.9878060000026 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 77.09528717613489,
            "unit": "iter/sec",
            "range": "stddev: 0.022129636904775648",
            "extra": "mean: 12.970961476741905 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 240.22939631488174,
            "unit": "iter/sec",
            "range": "stddev: 0.00033194071385687115",
            "extra": "mean: 4.162687894737268 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 102.52180834613237,
            "unit": "iter/sec",
            "range": "stddev: 0.00042553798489510463",
            "extra": "mean: 9.754022252746626 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2037.9964460961266,
            "unit": "iter/sec",
            "range": "stddev: 0.00010364087146020367",
            "extra": "mean: 490.67799009931775 usec\nrounds: 1212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7564030013669911,
            "unit": "iter/sec",
            "range": "stddev: 0.027407926820978982",
            "extra": "mean: 1.3220465785999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.495530456228176,
            "unit": "iter/sec",
            "range": "stddev: 0.0035836570237120936",
            "extra": "mean: 181.9660555000079 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.93425939303249,
            "unit": "iter/sec",
            "range": "stddev: 0.0008407644299736686",
            "extra": "mean: 11.244260724999577 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 88.38961561069671,
            "unit": "iter/sec",
            "range": "stddev: 0.0009643258949651902",
            "extra": "mean: 11.31354620212855 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 254.3389543805418,
            "unit": "iter/sec",
            "range": "stddev: 0.0003849840376162888",
            "extra": "mean: 3.9317610722885985 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.483484258111126,
            "unit": "iter/sec",
            "range": "stddev: 0.03536868591647992",
            "extra": "mean: 31.7626852162136 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68755.09362055619,
            "unit": "iter/sec",
            "range": "stddev: 0.00001587636322500976",
            "extra": "mean: 14.54437696672735 usec\nrounds: 11948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.68259078462104,
            "unit": "iter/sec",
            "range": "stddev: 0.000394755896828953",
            "extra": "mean: 10.451222022729018 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 721673.1802603095,
            "unit": "iter/sec",
            "range": "stddev: 6.222681079494237e-7",
            "extra": "mean: 1.3856687865818946 usec\nrounds: 25316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1669437.7072894177,
            "unit": "iter/sec",
            "range": "stddev: 4.426668586970384e-7",
            "extra": "mean: 599.0040812146564 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 148.5568194089207,
            "unit": "iter/sec",
            "range": "stddev: 0.0004415804695443222",
            "extra": "mean: 6.73143113846143 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1995.6686779968377,
            "unit": "iter/sec",
            "range": "stddev: 0.00010161175133935906",
            "extra": "mean: 501.0851806341697 usec\nrounds: 1229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 94.3609551041808,
            "unit": "iter/sec",
            "range": "stddev: 0.0009014991459891868",
            "extra": "mean: 10.597603626372084 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 146.99431451950034,
            "unit": "iter/sec",
            "range": "stddev: 0.0002782460117682783",
            "extra": "mean: 6.802984205673748 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9447614.750420602,
            "unit": "iter/sec",
            "range": "stddev: 1.9724785487315634e-8",
            "extra": "mean: 105.8468223373912 nsec\nrounds: 86957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7624.940210898074,
            "unit": "iter/sec",
            "range": "stddev: 0.00003130887487644564",
            "extra": "mean: 131.14856934494165 usec\nrounds: 3634"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11535.705767364532,
            "unit": "iter/sec",
            "range": "stddev: 0.00001752197836388532",
            "extra": "mean: 86.68737051434536 usec\nrounds: 5406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 69.04262481570385,
            "unit": "iter/sec",
            "range": "stddev: 0.02502881496240215",
            "extra": "mean: 14.483806238092914 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1846.8658844703566,
            "unit": "iter/sec",
            "range": "stddev: 0.00013390442785166494",
            "extra": "mean: 541.457833191163 usec\nrounds: 1169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 249.0372327547251,
            "unit": "iter/sec",
            "range": "stddev: 0.0004927281787974521",
            "extra": "mean: 4.015463828193483 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2423515.8617654485,
            "unit": "iter/sec",
            "range": "stddev: 9.322732393627409e-8",
            "extra": "mean: 412.62366621022176 nsec\nrounds: 128206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 87.18170905183246,
            "unit": "iter/sec",
            "range": "stddev: 0.0010338187240614201",
            "extra": "mean: 11.470295901236192 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 489.5130704503203,
            "unit": "iter/sec",
            "range": "stddev: 0.00020300456728715164",
            "extra": "mean: 2.042846371967279 msec\nrounds: 371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.677282932049204,
            "unit": "iter/sec",
            "range": "stddev: 0.025459580646837867",
            "extra": "mean: 1.4764878202000091 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.10918411725607,
            "unit": "iter/sec",
            "range": "stddev: 0.001104184349951551",
            "extra": "mean: 25.569441617647346 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 183.4003296973921,
            "unit": "iter/sec",
            "range": "stddev: 0.00036724732688269877",
            "extra": "mean: 5.452552902440173 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9471.93703161514,
            "unit": "iter/sec",
            "range": "stddev: 0.000011733319653778576",
            "extra": "mean: 105.57502617070097 usec\nrounds: 5082"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.4171090274897,
            "unit": "iter/sec",
            "range": "stddev: 0.0002743898613079371",
            "extra": "mean: 11.439408270588475 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1573585369285186,
            "unit": "iter/sec",
            "range": "stddev: 0.10157404872973506",
            "extra": "mean: 6.354914194799983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1946.5696883494845,
            "unit": "iter/sec",
            "range": "stddev: 0.00009724979705276754",
            "extra": "mean: 513.7242226595596 usec\nrounds: 1271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.63151246546237,
            "unit": "iter/sec",
            "range": "stddev: 0.0007475065006014505",
            "extra": "mean: 19.000023999998398 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.824505925134806,
            "unit": "iter/sec",
            "range": "stddev: 0.010042294495759838",
            "extra": "mean: 1.212847560600005 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}