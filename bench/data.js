window.BENCHMARK_DATA = {
  "lastUpdate": 1676421561760,
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
          "id": "bd4c16f01b460e3dd831107ee22c9ec4898a8a78",
          "message": "chore(flake/nixpkgs): `f8e87567` -> `89fc13df`",
          "timestamp": "2023-02-15T00:32:39Z",
          "tree_id": "5da00d54d7e962a5c9f6b1a5ca9f9fac464a7c81",
          "url": "https://github.com/ibis-project/ibis/commit/bd4c16f01b460e3dd831107ee22c9ec4898a8a78"
        },
        "date": 1676421466241,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 26.785744407717257,
            "unit": "iter/sec",
            "range": "stddev: 0.0009930637064375855",
            "extra": "mean: 37.333291350002185 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 56.50792966292016,
            "unit": "iter/sec",
            "range": "stddev: 0.010382318004495485",
            "extra": "mean: 17.696631357141865 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3051.7533261920253,
            "unit": "iter/sec",
            "range": "stddev: 0.00011536367041682493",
            "extra": "mean: 327.6804817143589 usec\nrounds: 1750"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 46.55114462204235,
            "unit": "iter/sec",
            "range": "stddev: 0.00048641715168961394",
            "extra": "mean: 21.48174890476252 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3032.674300512977,
            "unit": "iter/sec",
            "range": "stddev: 0.00006426396722434115",
            "extra": "mean: 329.7419705870987 usec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 109.81805036633138,
            "unit": "iter/sec",
            "range": "stddev: 0.0012773891133653814",
            "extra": "mean: 9.105971164705592 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12086.015018395097,
            "unit": "iter/sec",
            "range": "stddev: 0.000029736762384490107",
            "extra": "mean: 82.74025793265893 usec\nrounds: 4160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 155.18842819679358,
            "unit": "iter/sec",
            "range": "stddev: 0.0009789655676310043",
            "extra": "mean: 6.443779421052616 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3547.0246249677098,
            "unit": "iter/sec",
            "range": "stddev: 0.0001444914887178315",
            "extra": "mean: 281.9264329209734 usec\nrounds: 3153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3691.4456607414113,
            "unit": "iter/sec",
            "range": "stddev: 0.00008575458161903147",
            "extra": "mean: 270.8965787130547 usec\nrounds: 2020"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1212070.173635464,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016308773037101502",
            "extra": "mean: 825.0347395321312 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7434.695493193257,
            "unit": "iter/sec",
            "range": "stddev: 0.000025832060916499153",
            "extra": "mean: 134.5045000048136 usec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 315820.2758083413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018808169013765011",
            "extra": "mean: 3.1663578199357283 usec\nrounds: 1266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 98.76849328332405,
            "unit": "iter/sec",
            "range": "stddev: 0.010762151037762872",
            "extra": "mean: 10.124686190478101 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 205.94122772830687,
            "unit": "iter/sec",
            "range": "stddev: 0.0005853207685963687",
            "extra": "mean: 4.8557542898563035 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 34.062483162082174,
            "unit": "iter/sec",
            "range": "stddev: 0.001555346213367117",
            "extra": "mean: 29.357812677414675 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 297.8560796829831,
            "unit": "iter/sec",
            "range": "stddev: 0.0002003319970085852",
            "extra": "mean: 3.357326132353348 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3567.5449613855044,
            "unit": "iter/sec",
            "range": "stddev: 0.00007881806741617436",
            "extra": "mean: 280.3048064772354 usec\nrounds: 1266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 108.87232377582019,
            "unit": "iter/sec",
            "range": "stddev: 0.0011571648858019368",
            "extra": "mean: 9.185070781249305 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 159.41949228577676,
            "unit": "iter/sec",
            "range": "stddev: 0.001127655103015702",
            "extra": "mean: 6.272758654929043 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 63.02875368591582,
            "unit": "iter/sec",
            "range": "stddev: 0.0012526499827846544",
            "extra": "mean: 15.865774611111446 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 51.887453130639855,
            "unit": "iter/sec",
            "range": "stddev: 0.0010721573107006946",
            "extra": "mean: 19.27248187499675 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 0.9174037488219736,
            "unit": "iter/sec",
            "range": "stddev: 0.09973908464189953",
            "extra": "mean: 1.090032607000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 158.07101633220705,
            "unit": "iter/sec",
            "range": "stddev: 0.0006776351838207262",
            "extra": "mean: 6.326270452379255 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.5012849400218162,
            "unit": "iter/sec",
            "range": "stddev: 0.006395451276161809",
            "extra": "mean: 666.0960709999983 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 100.53269572833734,
            "unit": "iter/sec",
            "range": "stddev: 0.0008700467103859702",
            "extra": "mean: 9.947012688312189 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 3254888.1277230675,
            "unit": "iter/sec",
            "range": "stddev: 7.168712878276817e-7",
            "extra": "mean: 307.23022136544773 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 325.95933943514285,
            "unit": "iter/sec",
            "range": "stddev: 0.0009097968834463056",
            "extra": "mean: 3.0678673043481646 msec\nrounds: 322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3635.164014570621,
            "unit": "iter/sec",
            "range": "stddev: 0.00008946391256469591",
            "extra": "mean: 275.0907513365991 usec\nrounds: 1496"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 164.876961713115,
            "unit": "iter/sec",
            "range": "stddev: 0.0005546050735498045",
            "extra": "mean: 6.065128745761306 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 5.307393910288424,
            "unit": "iter/sec",
            "range": "stddev: 0.03607526974393175",
            "extra": "mean: 188.41638983334028 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 20.48347759216521,
            "unit": "iter/sec",
            "range": "stddev: 0.039659752082388436",
            "extra": "mean: 48.81983518181956 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 149.91449544076028,
            "unit": "iter/sec",
            "range": "stddev: 0.0014356362284403375",
            "extra": "mean: 6.670469036766073 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 3.4483820651020567,
            "unit": "iter/sec",
            "range": "stddev: 0.011895062958828223",
            "extra": "mean: 289.99106859999415 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 71.42734883545297,
            "unit": "iter/sec",
            "range": "stddev: 0.0012003295834674855",
            "extra": "mean: 14.000239632352836 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 43833.37378744717,
            "unit": "iter/sec",
            "range": "stddev: 0.000051275779430653353",
            "extra": "mean: 22.813667158022323 usec\nrounds: 10173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 450.5146400357728,
            "unit": "iter/sec",
            "range": "stddev: 0.0005178205723677639",
            "extra": "mean: 2.219683693121706 msec\nrounds: 378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 68.22388177117277,
            "unit": "iter/sec",
            "range": "stddev: 0.0006805424827974124",
            "extra": "mean: 14.657623900001227 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 62.351408396729795,
            "unit": "iter/sec",
            "range": "stddev: 0.002215977511867936",
            "extra": "mean: 16.03813010344844 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 2762.884889141253,
            "unit": "iter/sec",
            "range": "stddev: 0.00006726325733354951",
            "extra": "mean: 361.94052236132615 usec\nrounds: 1118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 75.36941270001212,
            "unit": "iter/sec",
            "range": "stddev: 0.003284888454417523",
            "extra": "mean: 13.267981853331321 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.4740440456999243,
            "unit": "iter/sec",
            "range": "stddev: 0.08599679596717764",
            "extra": "mean: 2.1095086185999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 59.773557888024,
            "unit": "iter/sec",
            "range": "stddev: 0.0017453698371358787",
            "extra": "mean: 16.729805541663367 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.03496460815084,
            "unit": "iter/sec",
            "range": "stddev: 0.0033987677303729943",
            "extra": "mean: 21.722619068179807 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.3884711347827008,
            "unit": "iter/sec",
            "range": "stddev: 0.09089789234049878",
            "extra": "mean: 2.5741938344000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 109.88434285763475,
            "unit": "iter/sec",
            "range": "stddev: 0.0006866473358112828",
            "extra": "mean: 9.100477593023347 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 7319.207241884802,
            "unit": "iter/sec",
            "range": "stddev: 0.00004851356329066678",
            "extra": "mean: 136.6268185818558 usec\nrounds: 3864"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 94.44628507401453,
            "unit": "iter/sec",
            "range": "stddev: 0.0010855608773256361",
            "extra": "mean: 10.588028943820628 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1214213.7717821614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012645606737293783",
            "extra": "mean: 823.5782061113099 nsec\nrounds: 72993"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.48887243598917757,
            "unit": "iter/sec",
            "range": "stddev: 0.03505064631437473",
            "extra": "mean: 2.045523384799992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 140.27084202916245,
            "unit": "iter/sec",
            "range": "stddev: 0.0009559600699990738",
            "extra": "mean: 7.129065353383271 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 148.00658050648593,
            "unit": "iter/sec",
            "range": "stddev: 0.0017547451491824382",
            "extra": "mean: 6.756456345237825 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.4911328672365,
            "unit": "iter/sec",
            "range": "stddev: 0.039229814546631256",
            "extra": "mean: 2.036108895800004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1153918.9169316855,
            "unit": "iter/sec",
            "range": "stddev: 0.000012686908279903427",
            "extra": "mean: 866.6120169509294 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 90.78209861669694,
            "unit": "iter/sec",
            "range": "stddev: 0.016373308775730525",
            "extra": "mean: 11.015387562499868 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 56.69633686975053,
            "unit": "iter/sec",
            "range": "stddev: 0.0017328428658075661",
            "extra": "mean: 17.637823803278813 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 82.893628657582,
            "unit": "iter/sec",
            "range": "stddev: 0.0014619677309836536",
            "extra": "mean: 12.063653337348907 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 16.804896243199813,
            "unit": "iter/sec",
            "range": "stddev: 0.004767513378151809",
            "extra": "mean: 59.50646677777942 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 60.63460826408334,
            "unit": "iter/sec",
            "range": "stddev: 0.0019043152264636063",
            "extra": "mean: 16.49223155932131 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2994.2736778788094,
            "unit": "iter/sec",
            "range": "stddev: 0.00011681331677960447",
            "extra": "mean: 333.9708081421655 usec\nrounds: 1793"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1272342.8909521902,
            "unit": "iter/sec",
            "range": "stddev: 0.000011716919075635443",
            "extra": "mean: 785.9516543151545 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 157.8776675825213,
            "unit": "iter/sec",
            "range": "stddev: 0.0009642620099310965",
            "extra": "mean: 6.334018074325228 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 50.99531760681896,
            "unit": "iter/sec",
            "range": "stddev: 0.0027065147227937954",
            "extra": "mean: 19.60964353061079 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 27.820852700967862,
            "unit": "iter/sec",
            "range": "stddev: 0.004544872809084655",
            "extra": "mean: 35.94426133334191 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.12304743596141,
            "unit": "iter/sec",
            "range": "stddev: 0.002386580695953824",
            "extra": "mean: 10.738480188673778 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 3998391.4441674897,
            "unit": "iter/sec",
            "range": "stddev: 3.976772309701243e-7",
            "extra": "mean: 250.1005751850638 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.07549356089004731,
            "unit": "iter/sec",
            "range": "stddev: 0.17003768326158794",
            "extra": "mean: 13.246162827799992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6058.451081260665,
            "unit": "iter/sec",
            "range": "stddev: 0.00011703502006233281",
            "extra": "mean: 165.05869018123957 usec\nrounds: 2821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1025.7831241328931,
            "unit": "iter/sec",
            "range": "stddev: 0.00016563652215703604",
            "extra": "mean: 974.8649363337031 usec\nrounds: 911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 61.58479191872041,
            "unit": "iter/sec",
            "range": "stddev: 0.002384892024142878",
            "extra": "mean: 16.237775087716454 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3216581.358263141,
            "unit": "iter/sec",
            "range": "stddev: 9.297443262518968e-7",
            "extra": "mean: 310.88907402592366 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 148.31111063153372,
            "unit": "iter/sec",
            "range": "stddev: 0.0014147539919375997",
            "extra": "mean: 6.742583180328374 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 97.16486456827218,
            "unit": "iter/sec",
            "range": "stddev: 0.0015386912951784039",
            "extra": "mean: 10.291786073528227 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 100.41212972745078,
            "unit": "iter/sec",
            "range": "stddev: 0.003582416008131685",
            "extra": "mean: 9.958956181034162 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 8.951721243092695,
            "unit": "iter/sec",
            "range": "stddev: 0.0070537853642865835",
            "extra": "mean: 111.71035969999821 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 435454.9564605719,
            "unit": "iter/sec",
            "range": "stddev: 0.000029908086249675647",
            "extra": "mean: 2.296448771942144 usec\nrounds: 21053"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 95563.02059423078,
            "unit": "iter/sec",
            "range": "stddev: 0.000008823484475843735",
            "extra": "mean: 10.464298781911577 usec\nrounds: 17153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 106.54190762056588,
            "unit": "iter/sec",
            "range": "stddev: 0.001291687175648508",
            "extra": "mean: 9.385977990570249 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 690.325061472162,
            "unit": "iter/sec",
            "range": "stddev: 0.0002752564700178407",
            "extra": "mean: 1.4485929250017904 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8136072.439910057,
            "unit": "iter/sec",
            "range": "stddev: 2.510752916226847e-7",
            "extra": "mean: 122.90942680090974 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 21.65652452521181,
            "unit": "iter/sec",
            "range": "stddev: 0.0066460388639137625",
            "extra": "mean: 46.17546083333145 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 169.72763214798152,
            "unit": "iter/sec",
            "range": "stddev: 0.0013352125699653556",
            "extra": "mean: 5.891792558138817 msec\nrounds: 86"
          }
        ]
      }
    ]
  }
}