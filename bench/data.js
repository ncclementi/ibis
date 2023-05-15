window.BENCHMARK_DATA = {
  "lastUpdate": 1684160679961,
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
          "id": "a18127b06dba6270abddf685613ddf96e3e106b4",
          "message": "chore(deps): update cpcloud/compare-commits-action action to v5.0.29",
          "timestamp": "2023-05-15T10:14:06-04:00",
          "tree_id": "6c619ae7d2b42ac20232046ffcf245a1e41f0928",
          "url": "https://github.com/ibis-project/ibis/commit/a18127b06dba6270abddf685613ddf96e3e106b4"
        },
        "date": 1684160591271,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 175.8475995605371,
            "unit": "iter/sec",
            "range": "stddev: 0.00009781662143852793",
            "extra": "mean: 5.686742397957733 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.2914777421404,
            "unit": "iter/sec",
            "range": "stddev: 0.0009537517928163292",
            "extra": "mean: 10.071357811765036 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 275.22521809533373,
            "unit": "iter/sec",
            "range": "stddev: 0.00030277292735365213",
            "extra": "mean: 3.6333879828323568 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2301.54462400183,
            "unit": "iter/sec",
            "range": "stddev: 0.00010379510469352549",
            "extra": "mean: 434.49081524269627 usec\nrounds: 433"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8642818731232127,
            "unit": "iter/sec",
            "range": "stddev: 0.002161413447397898",
            "extra": "mean: 1.157029935600002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7955.8059551997085,
            "unit": "iter/sec",
            "range": "stddev: 0.000014692627992462788",
            "extra": "mean: 125.6943678152967 usec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8668774851566867,
            "unit": "iter/sec",
            "range": "stddev: 0.0018431114947609138",
            "extra": "mean: 1.1535655465999923 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 699.7805424234474,
            "unit": "iter/sec",
            "range": "stddev: 0.00002493266906708064",
            "extra": "mean: 1.429019441633582 msec\nrounds: 514"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.18654671964349,
            "unit": "iter/sec",
            "range": "stddev: 0.0005959618236648396",
            "extra": "mean: 17.79785479591306 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 105.17368062709205,
            "unit": "iter/sec",
            "range": "stddev: 0.00007119338934284427",
            "extra": "mean: 9.508082193544595 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1198.180966776347,
            "unit": "iter/sec",
            "range": "stddev: 0.00001642809312063954",
            "extra": "mean: 834.5984686190232 usec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 84.78382342621892,
            "unit": "iter/sec",
            "range": "stddev: 0.011399217274841209",
            "extra": "mean: 11.794702805190497 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 276.22470266265043,
            "unit": "iter/sec",
            "range": "stddev: 0.0003871275256875491",
            "extra": "mean: 3.620241022473963 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2556924.7897288296,
            "unit": "iter/sec",
            "range": "stddev: 1.8181179096256377e-8",
            "extra": "mean: 391.09480420264055 nsec\nrounds: 103093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1839752.4598421343,
            "unit": "iter/sec",
            "range": "stddev: 9.82299318893056e-8",
            "extra": "mean: 543.5513863021595 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 405.65554472027554,
            "unit": "iter/sec",
            "range": "stddev: 0.00012497470282805097",
            "extra": "mean: 2.465145646387162 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2302.7439027859564,
            "unit": "iter/sec",
            "range": "stddev: 0.000123299052940868",
            "extra": "mean: 434.2645305846464 usec\nrounds: 1455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2302.2309637297317,
            "unit": "iter/sec",
            "range": "stddev: 0.00009085317392320507",
            "extra": "mean: 434.3612850988456 usec\nrounds: 1859"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.27646709308105,
            "unit": "iter/sec",
            "range": "stddev: 0.0002419758400180361",
            "extra": "mean: 21.60925547727288 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 53.53567094961346,
            "unit": "iter/sec",
            "range": "stddev: 0.0001654798078975836",
            "extra": "mean: 18.67913453333156 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12806258.359118482,
            "unit": "iter/sec",
            "range": "stddev: 3.7913044692158375e-9",
            "extra": "mean: 78.08682067447587 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.82445990251148,
            "unit": "iter/sec",
            "range": "stddev: 0.00020093938236268928",
            "extra": "mean: 5.080669346153964 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.37944601907066,
            "unit": "iter/sec",
            "range": "stddev: 0.0008724041293493118",
            "extra": "mean: 10.595527333334172 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 230.1654185052217,
            "unit": "iter/sec",
            "range": "stddev: 0.00030817846493463847",
            "extra": "mean: 4.34470133043602 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5789315.393070749,
            "unit": "iter/sec",
            "range": "stddev: 1.0873041797732318e-8",
            "extra": "mean: 172.7319954272054 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 84.75439128347993,
            "unit": "iter/sec",
            "range": "stddev: 0.014487062677276702",
            "extra": "mean: 11.798798680003225 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2245.6548151475367,
            "unit": "iter/sec",
            "range": "stddev: 0.00009543831598807936",
            "extra": "mean: 445.30441332957105 usec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2218.0101934781487,
            "unit": "iter/sec",
            "range": "stddev: 0.00011998330446574867",
            "extra": "mean: 450.8545555563299 usec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 99.47062334005733,
            "unit": "iter/sec",
            "range": "stddev: 0.000855295844641729",
            "extra": "mean: 10.05321939706087 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.1442077382697,
            "unit": "iter/sec",
            "range": "stddev: 0.00016960821427594396",
            "extra": "mean: 52.23512060000151 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.39901064031828,
            "unit": "iter/sec",
            "range": "stddev: 0.00015784821060043595",
            "extra": "mean: 10.822626704226314 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 124.22901982135961,
            "unit": "iter/sec",
            "range": "stddev: 0.0000712592501392935",
            "extra": "mean: 8.049648958335117 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2267.820159067753,
            "unit": "iter/sec",
            "range": "stddev: 0.00008500611920139065",
            "extra": "mean: 440.95207285355303 usec\nrounds: 1304"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7088939.10449754,
            "unit": "iter/sec",
            "range": "stddev: 4.875683230104026e-9",
            "extra": "mean: 141.06483145913097 nsec\nrounds: 61350"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.260236413309,
            "unit": "iter/sec",
            "range": "stddev: 0.00008016466579211633",
            "extra": "mean: 1.8441330063482715 msec\nrounds: 315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 435.32503436021506,
            "unit": "iter/sec",
            "range": "stddev: 0.000035960583544183354",
            "extra": "mean: 2.297134143616785 msec\nrounds: 376"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6317929.623584617,
            "unit": "iter/sec",
            "range": "stddev: 4.731299422016544e-9",
            "extra": "mean: 158.27969913864226 nsec\nrounds: 52632"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2371.622227442359,
            "unit": "iter/sec",
            "range": "stddev: 0.00008924532734111215",
            "extra": "mean: 421.652313943117 usec\nrounds: 1255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.53397507174853,
            "unit": "iter/sec",
            "range": "stddev: 0.00007940305353619797",
            "extra": "mean: 6.114937275641115 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3394546525253848,
            "unit": "iter/sec",
            "range": "stddev: 0.0004194805527554827",
            "extra": "mean: 746.5724936000015 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 85.71324619951376,
            "unit": "iter/sec",
            "range": "stddev: 0.014785116318377369",
            "extra": "mean: 11.666808157893254 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 96.99508724208046,
            "unit": "iter/sec",
            "range": "stddev: 0.0008201002844270493",
            "extra": "mean: 10.309800510867099 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 99.26041117265468,
            "unit": "iter/sec",
            "range": "stddev: 0.000734154216985822",
            "extra": "mean: 10.074509949999992 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6204504187455453,
            "unit": "iter/sec",
            "range": "stddev: 0.0018967539737399562",
            "extra": "mean: 617.1123709999961 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1773.3832610064453,
            "unit": "iter/sec",
            "range": "stddev: 0.000005224713856462413",
            "extra": "mean: 563.8938981709299 usec\nrounds: 1257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 101.63333195874384,
            "unit": "iter/sec",
            "range": "stddev: 0.0007798059707701",
            "extra": "mean: 9.839291704083177 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 162.89196307421489,
            "unit": "iter/sec",
            "range": "stddev: 0.0043201530136337644",
            "extra": "mean: 6.139038299540856 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 101.90289063411423,
            "unit": "iter/sec",
            "range": "stddev: 0.0008012541622933205",
            "extra": "mean: 9.813264312496628 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6472865.759526151,
            "unit": "iter/sec",
            "range": "stddev: 1.0505953990728315e-8",
            "extra": "mean: 154.491076619084 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 29.46404714100196,
            "unit": "iter/sec",
            "range": "stddev: 0.0007024061117744483",
            "extra": "mean: 33.9396687500003 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.41056879335528,
            "unit": "iter/sec",
            "range": "stddev: 0.00009016704348868087",
            "extra": "mean: 6.5184557222195325 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 82.37483828550718,
            "unit": "iter/sec",
            "range": "stddev: 0.019518479895664898",
            "extra": "mean: 12.139629294737412 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1076857.0051946614,
            "unit": "iter/sec",
            "range": "stddev: 1.5517018992021387e-7",
            "extra": "mean: 928.6284020776109 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 99.35514880806969,
            "unit": "iter/sec",
            "range": "stddev: 0.0008853155916133025",
            "extra": "mean: 10.064903651161151 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2321.8994486889874,
            "unit": "iter/sec",
            "range": "stddev: 0.00009160304010376429",
            "extra": "mean: 430.6818715016404 usec\nrounds: 1572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4500979.878285027,
            "unit": "iter/sec",
            "range": "stddev: 1.6461895239846073e-8",
            "extra": "mean: 222.17384370568206 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 97.96751666435156,
            "unit": "iter/sec",
            "range": "stddev: 0.0007460145314793758",
            "extra": "mean: 10.207465025638239 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 103.96474739045644,
            "unit": "iter/sec",
            "range": "stddev: 0.00022266777416211418",
            "extra": "mean: 9.618645022474187 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.572568625083463,
            "unit": "iter/sec",
            "range": "stddev: 0.0002979536377243333",
            "extra": "mean: 116.65115133333377 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9846.38237123222,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018187028669356278",
            "extra": "mean: 101.5601428319156 usec\nrounds: 5692"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17297661232609576,
            "unit": "iter/sec",
            "range": "stddev: 0.07229366654262608",
            "extra": "mean: 5.781128364999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 251.0721905494291,
            "unit": "iter/sec",
            "range": "stddev: 0.003984679876900576",
            "extra": "mean: 3.9829182109403227 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 751.1895499232816,
            "unit": "iter/sec",
            "range": "stddev: 0.0000341796088600111",
            "extra": "mean: 1.3312219267455587 msec\nrounds: 587"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 266.1787263039741,
            "unit": "iter/sec",
            "range": "stddev: 0.00036764749852710027",
            "extra": "mean: 3.7568742396716095 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.17144412685625,
            "unit": "iter/sec",
            "range": "stddev: 0.0001902615513550645",
            "extra": "mean: 19.54214927999601 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 253.58865170552266,
            "unit": "iter/sec",
            "range": "stddev: 0.00042943139215101704",
            "extra": "mean: 3.943394127751585 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13454.690588898993,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017899550299857217",
            "extra": "mean: 74.3235225955375 usec\nrounds: 7103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 93.04769969361593,
            "unit": "iter/sec",
            "range": "stddev: 0.0009613636877297794",
            "extra": "mean: 10.747175946237935 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.932454215280647,
            "unit": "iter/sec",
            "range": "stddev: 0.037234828522182094",
            "extra": "mean: 35.80064939130708 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 109.74512835975835,
            "unit": "iter/sec",
            "range": "stddev: 0.00011562189098536524",
            "extra": "mean: 9.112021781248222 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 100.01364236087834,
            "unit": "iter/sec",
            "range": "stddev: 0.0007833621506343612",
            "extra": "mean: 9.99863595000079 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.64582783525999,
            "unit": "iter/sec",
            "range": "stddev: 0.0003342742424438879",
            "extra": "mean: 40.57481885714272 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 80.9214250262493,
            "unit": "iter/sec",
            "range": "stddev: 0.016100240499113346",
            "extra": "mean: 12.357666707866551 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.323034285498128,
            "unit": "iter/sec",
            "range": "stddev: 0.001749015876035644",
            "extra": "mean: 430.47147699999186 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11879.815846749083,
            "unit": "iter/sec",
            "range": "stddev: 0.000016634933509097416",
            "extra": "mean: 84.17638900300382 usec\nrounds: 4383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 83.89092472452637,
            "unit": "iter/sec",
            "range": "stddev: 0.0006006863425375992",
            "extra": "mean: 11.920240518074058 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 263.5794586995894,
            "unit": "iter/sec",
            "range": "stddev: 0.00032559097249118134",
            "extra": "mean: 3.793922352423276 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.28373356738895,
            "unit": "iter/sec",
            "range": "stddev: 0.0003900188976428691",
            "extra": "mean: 26.821348194448863 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.04172533047052,
            "unit": "iter/sec",
            "range": "stddev: 0.02324220001650048",
            "extra": "mean: 26.99658266666645 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 191.31436494638186,
            "unit": "iter/sec",
            "range": "stddev: 0.0000674850161673843",
            "extra": "mean: 5.226999030001025 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1863109.4639347182,
            "unit": "iter/sec",
            "range": "stddev: 9.005390428290226e-8",
            "extra": "mean: 536.7371157506177 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 275.6565451377299,
            "unit": "iter/sec",
            "range": "stddev: 0.00034288973122624",
            "extra": "mean: 3.62770272514428 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 272.0429152642881,
            "unit": "iter/sec",
            "range": "stddev: 0.00029584969444023453",
            "extra": "mean: 3.6758906183184576 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4664.322602071722,
            "unit": "iter/sec",
            "range": "stddev: 0.00003563190800627193",
            "extra": "mean: 214.39340399736426 usec\nrounds: 1401"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 81.81122132601296,
            "unit": "iter/sec",
            "range": "stddev: 0.019027489656879944",
            "extra": "mean: 12.22326208791161 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 278.816153004935,
            "unit": "iter/sec",
            "range": "stddev: 0.00029068485522810224",
            "extra": "mean: 3.586592775284078 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2348.3556030588197,
            "unit": "iter/sec",
            "range": "stddev: 0.00008543380653604905",
            "extra": "mean: 425.82988653739795 usec\nrounds: 520"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7634217335290354,
            "unit": "iter/sec",
            "range": "stddev: 0.0036966476096961095",
            "extra": "mean: 1.3098919719999913 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140453.95697996448,
            "unit": "iter/sec",
            "range": "stddev: 6.672479274808529e-7",
            "extra": "mean: 7.119770930644896 usec\nrounds: 40001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 98.90635332829419,
            "unit": "iter/sec",
            "range": "stddev: 0.0009140518504724607",
            "extra": "mean: 10.110573955555285 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 105.96582344683354,
            "unit": "iter/sec",
            "range": "stddev: 0.00012753553712850396",
            "extra": "mean: 9.437004946238465 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1625495.3144044573,
            "unit": "iter/sec",
            "range": "stddev: 1.4040849267813188e-7",
            "extra": "mean: 615.1970978559087 nsec\nrounds: 144928"
          }
        ]
      }
    ]
  }
}